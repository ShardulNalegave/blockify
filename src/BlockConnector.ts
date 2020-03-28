
// Imports
import { Block } from "./Block";
import { Vector } from "./utils/Vector";
import { Plotter } from "./utils/Plotter";

// Interface for a BlockConnection
export interface BlockConnection {
	block: Block
	connectorLocation: Vector
}

// Interface for a Block Connection
export interface IBlockConnector {
	from: BlockConnection
	to: BlockConnection
	render(plotter: Plotter): void
}

// Block Connection class
export class BlockConnector implements IBlockConnector {

	/**
	 * Class Members
	 */

	// From which block
	public from: BlockConnection
	// To which block
	public to: BlockConnection

	// Constructs a BlockConnection instance
	public constructor(from: BlockConnection, to: BlockConnection) {
		this.from = from
		this.to = to
	}

	/**
	 * Renders the connection line
	 * @param plotter Plotter to use for rendering
	 */
	public render(plotter: Plotter): void {}

}