
// Utils
import { Vector } from './utils/Vector'
import { GL } from './utils/GL'

// The Blockify Class
export class Blockify {

	/**
	 * Class Members
	 */
	private webgl: GL
	private size: Vector = new Vector(300, 300)

	/**
	 * Constructs a Blockify instance
	 * @param canvas The canvas to render on
	 * @param width The width of canvas
	 * @param height The height of canvas
	 */
	public constructor(canvas: HTMLCanvasElement, width: number, height: number) {
		this.size = new Vector(width, height)
		this.webgl = new GL(canvas)
		// Set the canvas size
		this.webgl.setSize(this.size)
	}

	/**
	 * Updates the size of the canvas
	 * @param width The new width
	 * @param height The new height
	 */
	public updateCanvasSize(width: number, height: number) {
		this.size = new Vector(width, height)
		this.webgl.setSize(this.size)
	}

	/**
	 * Start point for rendering
	 */
	public render() {
		this.loop()
	}

	/**
	 * The render loop
	 */
	private loop() {

		this.webgl.context.clearColor(0, 0, 0, 1)
		this.webgl.context.clear(this.webgl.context.COLOR_BUFFER_BIT)

		// Request for animation frame
		requestAnimationFrame(this.loop.bind(this))
	}

}