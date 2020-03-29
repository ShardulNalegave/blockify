
// Imports
import { Vector } from './utils/Vector'
import { Plotter } from './utils/Plotter'

// Interface for Block class
export interface IBlock {
	corner: Vector
	scale: Vector
	isFocused: boolean
	render(plotter: Plotter): void
	focused(plotter: Plotter): void
	unfocused(plotter: Plotter): void
	updatePos(change: Vector): void
	isCursorAbove(cursor: Vector): boolean
}

// Block class
export class Block implements IBlock {

	/**
	 * Class Members
	 */
	public corner: Vector
	public scale: Vector
	public isFocused: boolean = false

	/**
	 * Constructs a new Block instance
	 * @param corner The location of top-left corner
	 * @param scale A Vector telling the width and height of the block
	 */
	public constructor(corner: Vector, scale: Vector, autoFocus?: boolean) {
		this.corner = corner
		this.scale = scale
		this.isFocused = autoFocus || false
	}

	public render(plotter: Plotter): void {}
	public focused(plotter: Plotter): void {
		this.isFocused = true
	}
	public unfocused(plotter: Plotter): void {
		this.isFocused = false
	}

	/**
	 * Tells if the cursor is above the block or not
	 * @param cursor The location of cursor
	 */
	public isCursorAbove(cursor: Vector): boolean {
		// The location of the opposite corner
		let oppositeCorner: Vector = (this.corner.add(this.scale))
		// Horizontal position
		if (cursor.x > this.corner.x && cursor.x < oppositeCorner.x) {
			// Vertical position
			if (cursor.y > this.corner.y && cursor.y < oppositeCorner.y) {
				return true
			}
			return false
		}
		return false
	}

	/**
	 * Updates position of the block
	 * @param change The new position
	 */
	public updatePos(change: Vector): void {
		this.corner = change
	}

}