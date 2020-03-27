
// Imports
import { Block } from '../../src/Block'
import { Vector } from '../../src/utils/Vector'
import { Colors, Color } from '../../src/utils/Colors'
import { Border } from '../../src/utils/Border'
import { Plotter } from '../../src/utils/Plotter'

// Start Block class
export class StartBlock extends Block {

	/**
	 * Class Members
	 */

	public borderRadius: number = 10
	public border: Border = new Border(Colors.Black, 1)
	public focusedBorder: Border = new Border(Colors.Black, 3)
	public color: Color = Colors.White

	/**
	 * Constructs a StartBlock instance
	 * @param corner The location of top-left corner
	 * @param scale Vector telling width and height of the block
	 */
	public constructor(corner: Vector, scale: Vector, autoFocus?: boolean) {
		super(corner, scale, autoFocus)
	}

	/**
	 * Renders the block
	 */
	public render(plotter: Plotter) {
		plotter.useColor(this.color)
		plotter.useBorder(this.isFocused ? this.focusedBorder : this.border)
		plotter.rectangle(this.corner, this.scale, this.borderRadius)
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