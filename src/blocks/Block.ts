
// Imports
import { Vector } from '../utils/Vector'
import { Colors, Color } from '../utils/Colors'
import {} from '../utils/Border'
import { Plotter } from '../utils/Plotter'

// Interface for Block class
export interface IBlock {
	plotter: Plotter | null
	corner: Vector
	scale: Vector
	attachPlotter(plotter: Plotter): void
	render(): void
	mouseClicked(cursor: Vector): boolean
	mouseDragged(cursor: Vector): boolean
	isCursorAbove(cursor: Vector): boolean
}

// Block class
export class Block implements IBlock {

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

	public render(): void {}
	public mouseClicked(cursor: Vector): boolean {
		return this.isCursorAbove(cursor)
	}
	public mouseDragged(cursor: Vector): boolean {
		return this.isCursorAbove(cursor)
	}

	public isCursorAbove(cursor: Vector): boolean {
		let oppositeCorner: Vector = (this.corner.add(this.scale))
		if (cursor.x > this.corner.x && cursor.y < oppositeCorner.x) {
			if (cursor.y > this.corner.y && cursor.y < oppositeCorner.y) {
				return true
			}
			return false
		}
		return false
	}

}