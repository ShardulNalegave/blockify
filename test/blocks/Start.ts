
// Imports
import { Block } from '../../src/Block'
import { Vector } from '../../src/utils/Vector'
import { Colors, Color } from '../../src/utils/Colors'
import { Border } from '../../src/utils/Border'

// Start Block class
export class StartBlock extends Block {

	/**
	 * Class Members
	 */

	public borderRadius: number = 10
	public border: Border = new Border(Colors.Black, 3)
	public color: Color = Colors.White

	/**
	 * Constructs a StartBlock instance
	 * @param corner The location of top-left corner
	 * @param scale Vector telling width and height of the block
	 */
	public constructor(corner: Vector, scale: Vector) {
		super(corner, scale)
	}

	/**
	 * Renders the block
	 */
	public render() {
		if (this.plotter) {
			this.plotter.useColor(this.color)
			this.plotter.useBorder(this.border)
			this.plotter.rectangle(this.corner, this.scale, this.borderRadius)
		}
	}

	/**
	 * Triggered at mouse click
	 * @param cursor The location of cursor
	 */
	public mouseClicked(cursor: Vector): boolean {
		// Check if cursor is above this block
		if (this.isCursorAbove(cursor)) {
			console.log("abc")
			return true
		}
		return false
	}

}