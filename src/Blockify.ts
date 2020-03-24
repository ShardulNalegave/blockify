
// Utils
import { Vector } from './utils/Vector'
import p5 from 'p5'

// The Blockify Class
export class Blockify {

	/**
	 * Class Members
	 */
	private sketch: p5
	private size: Vector = new Vector(300, 300)

	/**
	 * Constructs a Blockify instance
	 * @param canvas The canvas to render on
	 * @param width The width of canvas
	 * @param height The height of canvas
	 */
	public constructor(p5Instance: p5, width: number, height: number) {
		this.size = new Vector(width, height)
		this.sketch = p5Instance
	}

	/**
	 * Updates the size of the canvas
	 * @param width The new width
	 * @param height The new height
	 */
	public updateCanvasSize(width: number, height: number) {
		this.size = new Vector(width, height)
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
	}

}