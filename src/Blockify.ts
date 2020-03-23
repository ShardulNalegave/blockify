
import { Vector } from './utils/Vector'
import { GL } from './utils/GL'

export class Blockify {

	private webgl: GL
	private size: Vector = new Vector(300, 300)

	constructor(canvas: HTMLCanvasElement, width: number, height: number) {
		this.size = new Vector(width, height)
		this.webgl = new GL(canvas)
		this.webgl.setSize(this.size)
	}

	public render() {
		if (this.webgl.context) {
			this.webgl.context.clearColor(0, 0, 0, 1)
			this.webgl.context.clear(this.webgl.context.COLOR_BUFFER_BIT)
		}
	}

}