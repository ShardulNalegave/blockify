
import { Vector } from './Vector'

export interface IGL {
	canvas: HTMLCanvasElement
	context: WebGL2RenderingContext | null
	setSize(size: Vector): void
}

export class GL implements IGL {

	public canvas: HTMLCanvasElement
	public context: WebGL2RenderingContext | null

	public constructor(canvas: HTMLCanvasElement) {
		this.canvas = canvas
		this.context = canvas.getContext("webgl2")
		if (this.context === null) {
			throw new Error("WebGL2 Cannot be initialized")
		}
	}

	public setSize(size: Vector) {
		this.canvas.setAttribute("width", String(size.x))
		this.canvas.setAttribute("height", String(size.y))
	}

}