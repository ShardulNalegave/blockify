
// Imports
import { IBlock, Block } from "../Block";
import { Vector } from "../utils/Vector";

// Interface for Event Block config
export interface IEventBlockConfig {
	corner: Vector
	scale: Vector
	connections: 1 | 2 | 3
	autoFocus?: boolean
}

// Interface for Event type blocks
export interface IEventBlock extends IBlock, IEventBlockConfig {
}

// Event Block Class
export class EventBlock extends Block implements IEventBlock  {

	/**
	 * Class Members
	 */

	// Number of connections (1-3)
	public readonly connections: 1 | 2 | 3

	/**
	 * Constructs a EventBlock instance
	 * @param config Config for the block
	 */
	public constructor(config: IEventBlockConfig) {
		super(config.corner, config.scale, config.autoFocus)
		this.connections = config.connections
	}

}