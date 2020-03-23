
import { Vector } from './utils/Vector'

export class Blockify {

	private canvas: HTMLCanvasElement | null = null
	private gl: WebGL2RenderingContext | null = null
	private size: Vector = new Vector(300, 300)

	constructor(canvasSelector: string, width: number, height: number) {
		this.size = new Vector(width, height)
		this.getCanvas(canvasSelector)
	}

	private getCanvas(canvasSelector: string) {
		this.canvas = <HTMLCanvasElement> document.querySelector(canvasSelector)
		if (this.canvas) {
			this.canvas.setAttribute("width", String(this.size.x))
			this.canvas.setAttribute("height", String(this.size.y))
			this.gl = this.canvas.getContext("webgl2")
		}
	}

	public render() {
		if (this.gl) {
			this.gl.clearColor(0, 0, 0, 1)
			this.gl.clear(this.gl.COLOR_BUFFER_BIT)
		}
	}

}