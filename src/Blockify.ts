
// Utils
import p5 from 'p5'
import { Vector } from './utils/Vector'
import { Plotter } from './utils/Plotter'
import { Block } from './blocks/Block'

// The interface for the options passed to Blockify during intialization
export interface IBlockifyOptions {
	width: number,
	height: number,
	parent?: HTMLElement
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
	private blocks: Block[] = []

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
				if (block.mouseClicked(new Vector(this.sketch.mouseX, this.sketch.mouseY))) {
					break
				}
			}
		}

		// Mouse Dragged
		this.sketch.mouseDragged = () => {
			for (let i = 0; i < this.blocks.length; i++) {
				const block = this.blocks[i];
				if (block.mouseDragged(new Vector(this.sketch.mouseX, this.sketch.mouseY))) {
					break
				}
			}
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
		this.sketch.background(0)
		this.blocks.forEach(block => {
			block.render()
		})
	}


	public addBlock(block: Block): void {
		block.attachPlotter(this.plotter)
		this.blocks.push(block)
	}

}