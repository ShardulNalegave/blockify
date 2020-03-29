
// Imports
import { IBlock, Block } from "../Block";
import { Vector } from "../utils/Vector";
import { Plotter } from "../utils/Plotter";

// Interface for Event Block config
export interface IEventBlockConfig {
	scale: Vector
	connections: 1 | 2 | 3
	render(plotter: Plotter): void
	focused(plotter: Plotter): void
	unfocused(plotter: Plotter): void
}

// Interface for Event type blocks
export interface IEventBlock {
	config: IEventBlockConfig
	create(corner: Vector, autoFocus?: boolean): void
}

// Event Block Class
export class EventBlock implements IEventBlock  {

	/**
	 * Class Members
	 */

	// Block config
	public config: IEventBlockConfig

	/**
	 * Constructs a EventBlock instance
	 * @param config Config for the blocks generated of this type
	 */
	public constructor(config: IEventBlockConfig) {
		this.config = config
	}

	/**
	 * Returns a new instance of a block created using this block type
	 * @param corner The location of the top-left corner of the new block
	 * @param autoFocus Should be focused at start or not
	 */
	public create(corner: Vector, autoFocus?: boolean): Block {
		let block: Block = new Block(corner, this.config.scale, autoFocus)
		block.render = this.config.render
		block.focused = this.config.focused
		block.unfocused = this.config.unfocused
		return block
	}

}