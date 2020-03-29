
// Imports
import { IBlock, Block } from "../Block";
import { Vector } from "../utils/Vector";
import { Plotter } from "../utils/Plotter";

// Interface for Event Block config
export interface IEventBlockConfig {
	connections: 1 | 2 | 3
	render(plotter: Plotter, block: Block): void
	focused(block: Block): void
	unfocused(block: Block): void
}

// Interface for Event type blocks
export interface IEventBlock {
	config: IEventBlockConfig
	create(corner: Vector, scale: Vector, autoFocus?: boolean): void
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
	public create(corner: Vector, scale: Vector, autoFocus?: boolean): Block {
		let block: Block = new Block(corner, scale, autoFocus)
		block.render = (plotter: Plotter) => {
			this.config.render(plotter, block)
		}
		block.focused = () => {
			block.isFocused = true
			this.config.focused(block)
		}
		block.unfocused = () => {
			block.isFocused = false
			this.config.unfocused(block)
		}
		return block
	}

}