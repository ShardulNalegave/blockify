
// Utils
import p5 from 'p5'
import { Vector } from './utils/Vector'
import { Color, Colors } from './utils/Colors'
import { Plotter } from './utils/Plotter'
import { Block } from './Block'

// Designs for canvas background
type BackgroundDesigns = "dots" | "clean"

// The interface for the options passed to Blockify during intialization
export interface IBlockifyOptions {
	width: number,
	height: number,
	parent?: HTMLElement,
	backgroundColor?: Color,
	backgroundDesign?: BackgroundDesigns,
	dotsColor?: Color
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
	private parent: HTMLElement | undefined
	private plotter: Plotter
	private backgroundColor: Color
	private backgroundDesign: BackgroundDesigns
	private dotsColor: Color
	private blocks: Block[] = []

	// Properties to handle dragging of blocks
	private dragProperties: {
		isDragging: boolean,
		currentlyDragging: Block | null,
		holdDistanceFromCorner: Vector | null
	} = {
		isDragging: false,
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
		this.plotter = new Plotter(this.sketch)
		let {
			width,
			height,
			parent
		} = options
		this.size = new Vector(width, height)
		this.parent = parent

		// Set background color
		this.backgroundColor = options.backgroundColor || Colors.Black

		// Set background design
		this.backgroundDesign = options.backgroundDesign || "clean"

		// Other options
		this.dotsColor = options.dotsColor || Colors.Grey[600]
		
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
			for (let i = 0; i < this.blocks.length; i++) {
				const block = this.blocks[i];
				if (block.isCursorAbove(new Vector(this.sketch.mouseX, this.sketch.mouseY))) {
					block.focused()
				}
			}
		}

		// Mouse Dragged
		this.sketch.mouseDragged = () => {
			if (this.dragProperties.isDragging && this.dragProperties.holdDistanceFromCorner) {
				//// If blocks are already being dragged just update the position of the one being dragged
				// The change will be the current mousePosition plus the original distance from the corner at drag start
				let change: Vector = (new Vector(this.sketch.mouseX, this.sketch.mouseY)).add(this.dragProperties.holdDistanceFromCorner)
				if (this.dragProperties.currentlyDragging) {
					// Update the position
					this.dragProperties.currentlyDragging.updatePos(change)
				}
			} else {
				//// If dragging has just started
				let mouseLoc: Vector = new Vector(this.sketch.mouseX, this.sketch.mouseY)
				// Loop through all blocks to get the target block
				for (let i = 0; i < this.blocks.length; i++) {
					const block = this.blocks[i];
					// Check if it is the target
					if (block.isCursorAbove(mouseLoc)) {
						// Distance will be corner minus mouse location
						let dist: Vector = block.corner.minus(mouseLoc)
						// Set the properties
						this.dragProperties.holdDistanceFromCorner = dist
						this.dragProperties.isDragging = true
						this.dragProperties.currentlyDragging = block
						// Break off the loop
						break
					}
				}
			}
		}

		// Mouse Released
		this.sketch.mouseReleased = () => {
			// Reset drag options
			this.dragProperties.isDragging = false
			this.dragProperties.currentlyDragging = null
			this.dragProperties.holdDistanceFromCorner = null
		}
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
		if (this.parent) {
			canvas.parent(this.parent)
		}
	}

	/**
	 * The render loop
	 */
	private loop() {
		// Set the background color
		this.sketch.background(this.backgroundColor.r, this.backgroundColor.g, this.backgroundColor.b)

		// Create the background design
		if (this.backgroundDesign === "dots") {
			let scale = 15
			let cols: number = this.sketch.width / scale
			let rows: number = this.sketch.height / scale
			for (let y: number = 0; y < rows; y++) {
				for (let x: number = 0; x < cols; x++) {
					this.sketch.noStroke()
					this.sketch.fill(this.dotsColor.r, this.dotsColor.g, this.dotsColor.b)
					this.sketch.ellipse((x * scale) + 2.5, (y * scale) + 2.5, 2.5, 2.5)
				}
			}
		}

		// Render the blocks
		this.blocks.forEach(block => {
			block.render()
		})
	}


	public addBlock(block: Block): void {
		block.attachPlotter(this.plotter)
		this.blocks.push(block)
	}

}