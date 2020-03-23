
export interface IGL {
	canvas: HTMLCanvasElement
	context: WebGL2RenderingContext | null
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

}