
// Utils
import { Vector } from './Vector'

// Interface for GL utility
export interface IGL {
	// Canvas to render on
	canvas: HTMLCanvasElement
	// The WebGL2 Rendering Context
	context: WebGL2RenderingContext | null

	/**
	 * Methods
	 */

	// Sets the size of canvas
	setSize(size: Vector): void
}

// The GL utility class
export class GL implements IGL {

	/**
	 * Class members
	 */
	public canvas: HTMLCanvasElement
	public context: WebGL2RenderingContext

	/**
	 * Constructs a GL instance
	 * @param canvas The canvas to render on
	 */
	public constructor(canvas: HTMLCanvasElement) {
		this.canvas = canvas
		let context: WebGL2RenderingContext | null = canvas.getContext("webgl2")
		if (context === null) {
			throw new Error("WebGL2 Cannot be initialized")
		} else {
			this.context = context
		}
	}

	/**
	 * Sets the size of canvas
	 * @param size The size to set in the form of a Vector
	 */
	public setSize(size: Vector) {
		this.canvas.setAttribute("width", String(size.x))
		this.canvas.setAttribute("height", String(size.y))
	}

}