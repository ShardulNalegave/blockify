
// Imports
import { Block } from "./Block";
import { Vector } from "./utils/Vector";
import { Plotter } from "./utils/Plotter";
import { Color } from "./utils/Colors";

// Interface for a BlockConnection
export interface BlockConnection {
	block: Block
	connectorLocation: Vector
}

// Interface for a Block Connection
export interface IBlockConnector {
	from: BlockConnection
	to: BlockConnection
	color?: Color
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
	// Color of the line
	public color?: Color

	// Constructs a BlockConnection instance
	public constructor(from: BlockConnection, to: BlockConnection, color?: Color) {
		this.from = from
		this.to = to
		this.color = color
	}

	/**
	 * Renders the connection line
	 * @param plotter Plotter to use for rendering
	 */
	public render(plotter: Plotter): void {
		plotter.useColor(this.color || plotter.colors.accent)
		plotter.line(this.from.connectorLocation, this.to.connectorLocation)
	}

}