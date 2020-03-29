
// Imports
import { IBlock, Block } from "../Block";
import { Vector } from "../utils/Vector";

// Interface for Event Block config
export interface IEventBlockConfig {
	scale: Vector
	connections: 1 | 2 | 3
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
		return new Block(corner, this.config.scale, autoFocus)
	}

}