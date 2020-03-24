
// Utils
import { Vector } from './utils/Vector'
import p5 from 'p5'

// The interface for the options passed to Blockify during intialization
export interface IBlockifyOptions {
	width: number,
	height: number
}

// The Blockify Class
export class Blockify {

	/**
	 * Class Members
	 */
	private sketch: p5
	private size: Vector = new Vector(300, 300)

	/**
	 * Constructs a Blockify instance
	 * @param p5Instance p5.js Instance to use
	 * @param options Options to configure Blockify
	 */
	public constructor(p5Instance: p5, options: IBlockifyOptions) {
		this.sketch = p5Instance
		let {
			width,
			height
		} = options
		this.size = new Vector(width, height)
		
		// Register sketch events to local methods
		this.sketch.setup = () => {
			this.render()
		}
		this.sketch.draw = () => {
			this.loop()
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
		this.sketch.createCanvas(this.size.x, this.size.y)
	}

	/**
	 * The render loop
	 */
	private loop() {
		this.sketch.background(0)
	}

}