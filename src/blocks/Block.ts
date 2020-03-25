
// Imports
import { Vector } from '../utils/Vector'
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

	/**
	 * Class Members
	 */

	public plotter: Plotter | null = null
	public corner: Vector
	public scale: Vector

	/**
	 * Constructs a new Block instance
	 * @param corner The location of top-left corner
	 * @param scale A Vector telling the width and height of the block
	 */
	public constructor(corner: Vector, scale: Vector) {
		this.corner = corner
		this.scale = scale
	}

	/**
	 * Attachs the plotter object to this block
	 * @param plotter The Plotter object to be used
	 */
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

	/**
	 * Tells if the cursor is above the block or not
	 * @param cursor The location of cursor
	 */
	public isCursorAbove(cursor: Vector): boolean {
		// The location of the opposite corner
		let oppositeCorner: Vector = (this.corner.add(this.scale))
		// Horizontal position
		if (cursor.x > this.corner.x && cursor.y < oppositeCorner.x) {
			// Vertical position
			if (cursor.y > this.corner.y && cursor.y < oppositeCorner.y) {
				return true
			}
			return false
		}
		return false
	}

}