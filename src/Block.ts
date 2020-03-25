
// Imports
import { Vector } from './utils/Vector'
import { Colors, Color } from './utils/Colors'
import {} from './utils/Border'
import { Plotter } from './utils/Plotter'

// Interface for Block class
export interface IBlock {
	plotter: Plotter
	corner: Vector
	scale: Vector
}

// Block class
export class Block {

	public plotter: Plotter | null = null
	public corner: Vector
	public scale: Vector

	public constructor(corner: Vector, scale: Vector) {
		this.corner = corner
		this.scale = scale
	}

	public attachPlotter(plotter: Plotter) {
		this.plotter = plotter
	}

	public render() {
		if (this.plotter) {
			this.plotter.useColor(Colors.White)
			this.plotter.rectangle(this.corner, this.scale, 10)
		}
	}

}