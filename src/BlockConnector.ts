
// Imports
import { Block } from "./Block";

// Interface for a Block Connection
export interface IBlockConnection {
	from: Block
	to: Block
}

// Block Connection class
export class BlockConnection implements IBlockConnection {

	/**
	 * Class Members
	 */

	// From which block
	public from: Block
	// To which block
	public to: Block

	// Constructs a BlockConnection instance
	public constructor(from: Block, to: Block) {
		this.from = from
		this.to = to
	}

}