
// Imports
import { Block } from './Block'
import { Vector } from './../utils/Vector'
import { Colors } from './../utils/Colors'

// Start Block class
export class StartBlock extends Block {

	public borderRadius: number = 10

	public constructor(corner: Vector, scale: Vector) {
		super(corner, scale)
	}

	public render() {
		if (this.plotter) {
			this.plotter.useColor(Colors.White)
			this.plotter.rectangle(this.corner, this.scale, this.borderRadius)
		}
	}

	public mouseClicked(cursor: Vector): boolean {
		if (this.isCursorAbove(cursor)) {
			console.log("Hello, World!")
			return true
		}
		return false
	}

}