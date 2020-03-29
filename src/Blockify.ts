
// Utils
import p5 from 'p5'
import { Vector } from './utils/Vector'
import { Color, Colors } from './utils/Colors'
import { Plotter } from './utils/Plotter'
import { Block } from './Block'
import { ContextMenu, ContextMenuConfig } from './ContextMenu'

// Designs for canvas background
type BackgroundDesigns = "dots" | "clean"

// The interface for the options passed to Blockify during intialization
export interface IBlockifyOptions {
	width: number
	height: number
	parent: HTMLElement
	contextMenu: ContextMenuConfig
	primaryColor?: Color
	accentColor?: Color
	backgroundDesign?: BackgroundDesigns
}

// Interface for main Blockify class
export interface IBlockify {
	updateCanvasSize(width: number, height: number): void
	render(): void
}

// The Blockify Class
export class Blockify implements IBlockify {

	/**
	 * Class Members
	 */

	private sketch: p5
	private size: Vector = new Vector(300, 300)
	private parent: HTMLElement
	private plotter: Plotter
	private backgroundDesign: BackgroundDesigns
	private blocks: Block[] = []

	private contextMenu: ContextMenu

	// Properties to handle dragging of blocks
	private dragProperties: {
		isDragging: boolean,
		isDraggingBlock: boolean,
		currentlyDragging: Block | null,
		holdDistanceFromCorner: Vector | null
	} = {
		isDragging: false,
		isDraggingBlock: false,
		currentlyDragging: null,
		holdDistanceFromCorner: null
	}

	/**
	 * Constructs a Blockify instance
	 * @param p5Instance p5.js Instance to use
	 * @param options Options to configure Blockify
	 */
	public constructor(p5Instance: p5, options: IBlockifyOptions) {
		this.sketch = p5Instance
		let {
			width,
			height,
			parent
		} = options
		this.size = new Vector(width, height)
		this.parent = parent
		this.backgroundDesign = options.backgroundDesign || "clean"

		// Init the context menu
		this.contextMenu = new ContextMenu(options.contextMenu)

		// Create a Plotter instance
		let primaryColor: Color = options.primaryColor || Colors.Black
		let accentColor: Color = options.accentColor || Colors.Grey[600]
		this.plotter = new Plotter(this.sketch, this.parent, {
			primary: primaryColor,
			accent: accentColor
		})
		
		// Register sketch events to local methods
		this.sketch.setup = () => {
			this.render()
		}
		this.sketch.draw = () => {
			this.loop()
		}

		/**
		 * Mouse Events
		 */

		// Mouse Pressed
		this.sketch.mouseClicked = () => {
			if (this.contextMenu.isShowing) {
				this.contextMenu.isCursorOnTop(this.plotter.cursorPos)
				// Stop showing context menu
				this.contextMenu.hide()
				return
			}
			for (let i = 0; i < this.blocks.length; i++) {
				const block = this.blocks[i];
				if (block.isCursorAbove(this.plotter.cursorPos)) {
					// If the cursor is above the block
					block.focused()
				} else {
					// If the cursor is not above the block
					block.unfocused()
				}
			}
		}

		// Mouse Dragged
		this.sketch.mouseDragged = () => {
			// Only for left mouse button
			if (this.sketch.mouseButton === this.sketch.LEFT) {
				if (this.dragProperties.isDraggingBlock && this.dragProperties.holdDistanceFromCorner) {
					//// If blocks are already being dragged just update the position of the one being dragged
					// The change will be the current mousePosition plus the original distance from the corner at drag start
					let change: Vector = this.plotter.cursorPos.add(this.dragProperties.holdDistanceFromCorner)
					if (this.dragProperties.currentlyDragging) {
						// Update the position
						this.dragProperties.currentlyDragging.updatePos(change)
					}
				} else {
					if (!this.dragProperties.isDragging) {
						//// If dragging has just started
						let mouseLoc: Vector = this.plotter.cursorPos
						// Loop through all blocks to get the target block
						for (let i = 0; i < this.blocks.length; i++) {
							const block = this.blocks[i];
							// Check if it is the target
							if (block.isCursorAbove(mouseLoc)) {
								// Distance will be corner minus mouse location
								let dist: Vector = block.corner.minus(mouseLoc)
								// Set the properties
								this.dragProperties.holdDistanceFromCorner = dist
								this.dragProperties.isDraggingBlock = true
								this.dragProperties.currentlyDragging = block
								// Break off the loop
								break
							}
						}
					}
					this.dragProperties.isDragging = true
				}
			}
		}

		// Mouse Released
		this.sketch.mouseReleased = () => {
			// Reset drag options
			this.dragProperties.isDragging = false
			this.dragProperties.isDraggingBlock = false
			this.dragProperties.currentlyDragging = null
			this.dragProperties.holdDistanceFromCorner = null
		}

		// Right-click event
		this.parent.addEventListener("contextmenu", (e: Event) => {
			e.preventDefault()
			let handled: boolean = false
			// Check if cursor is on top of any block
			for (let i = 0; i < this.blocks.length; i++) {
				const block = this.blocks[i];
				if (block.isCursorAbove(this.plotter.cursorPos)) {
					// Show the context menu
					this.contextMenu.show(this.plotter.cursorPos, block)
					handled = true
					break
				}
			}
			if (!handled) {
				// Show the context menu
				this.contextMenu.show(this.plotter.cursorPos)
			}
		})
	}

	/**
	 * Updates the size of the canvas
	 * @param width The new width
	 * @param height The new height
	 */
	public updateCanvasSize(width: number, height: number) {
		this.size = new Vector(width, height)
		this.sketch.resizeCanvas(this.size.x, this.size.y)
	}

	/**
	 * Start point for rendering
	 */
	public render() {
		let canvas = this.sketch.createCanvas(this.size.x, this.size.y)
		canvas.parent(this.parent)
	}

	/**
	 * The render loop
	 */
	private loop() {

		// Reset cursor to normal
		this.plotter.cursor("unset")

		// Update cursor position variable
		this.plotter.updateCursorPos(new Vector(this.sketch.mouseX, this.sketch.mouseY))

		// Set the background color
		this.sketch.background(this.plotter.colors.primary.r, this.plotter.colors.primary.g, this.plotter.colors.primary.b)

		// Create the background design
		if (this.backgroundDesign === "dots") {
			let scale = 30
			let cols: number = this.sketch.width / scale
			let rows: number = this.sketch.height / scale
			for (let y: number = 0; y < rows; y++) {
				for (let x: number = 0; x < cols; x++) {
					this.sketch.noStroke()
					this.sketch.fill(this.plotter.colors.accent.r, this.plotter.colors.accent.g, this.plotter.colors.accent.b)
					this.sketch.ellipse((x * scale) + 2.5, (y * scale) + 2.5, 2.5, 2.5)
				}
			}
		}

		// Render the blocks
		this.blocks.forEach(block => {
			block.render(this.plotter)
		})

		// Zoom in button
		this.sketch.push()
		// Shift origin
		this.sketch.translate(this.sketch.width - 50, this.sketch.height - 50)
		// Button circle
		this.sketch.noStroke()
		this.sketch.fill(this.plotter.colors.accent.r, this.plotter.colors.accent.g, this.plotter.colors.accent.b)
		this.sketch.ellipse(0, 0, 60, 60)
		// Horizontal line for plus sign
		this.sketch.noStroke()
		this.sketch.fill(this.plotter.colors.primary.r, this.plotter.colors.primary.g, this.plotter.colors.primary.b)
		this.sketch.rectMode(this.sketch.CENTER)
		this.sketch.rect(0, 0, 30, 10, 10)
		// Vertical line for plus sign
		this.sketch.noStroke()
		this.sketch.fill(this.plotter.colors.primary.r, this.plotter.colors.primary.g, this.plotter.colors.primary.b)
		this.sketch.rectMode(this.sketch.CENTER)
		this.sketch.rect(0, 0, 10, 30, 10)
		this.sketch.pop()

		// Zoom out button
		this.sketch.push()
		// Shift origin
		this.sketch.translate(this.sketch.width - 120, this.sketch.height - 50)
		// Button circle
		this.sketch.noStroke()
		this.sketch.fill(this.plotter.colors.accent.r, this.plotter.colors.accent.g, this.plotter.colors.accent.b)
		this.sketch.ellipse(0, 0, 60, 60)
		// Vertical line for plus sign
		this.sketch.noStroke()
		this.sketch.fill(this.plotter.colors.primary.r, this.plotter.colors.primary.g, this.plotter.colors.primary.b)
		this.sketch.rectMode(this.sketch.CENTER)
		this.sketch.rect(0, 0, 30, 10, 10)
		this.sketch.pop()

		//// Bin icon
		// Rect 1 (container)
		this.sketch.push()
		this.sketch.translate(this.sketch.width - 50, this.sketch.height - 150)
		this.sketch.noStroke()
		this.sketch.fill(this.plotter.colors.accent.r, this.plotter.colors.accent.g, this.plotter.colors.accent.b)
		this.sketch.rectMode(this.sketch.CENTER)
		this.sketch.rect(0, 0, 60, 80, 5)
		this.sketch.pop()
		// Rect 2 (lid)
		this.sketch.push()
		this.sketch.translate(this.sketch.width - 50, this.sketch.height - 205)
		this.sketch.noStroke()
		this.sketch.fill(this.plotter.colors.accent.r, this.plotter.colors.accent.g, this.plotter.colors.accent.b)
		this.sketch.rectMode(this.sketch.CENTER)
		this.sketch.rect(0, 0, 60, 20, 5)
		this.sketch.pop()
		// Rect 3 (lid handle)
		this.sketch.push()
		this.sketch.translate(this.sketch.width - 50, this.sketch.height - 215)
		this.sketch.noStroke()
		this.sketch.fill(this.plotter.colors.accent.r, this.plotter.colors.accent.g, this.plotter.colors.accent.b)
		this.sketch.rectMode(this.sketch.CENTER)
		this.sketch.rect(0, 0, 15, 10, 2.5)
		this.sketch.pop()

		// Render the context menu
		this.contextMenu.render(this.plotter)
	}


	public addBlock(block: Block): void {
		this.blocks.push(block)
	}

}