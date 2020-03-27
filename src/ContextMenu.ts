
// Imports
import { Vector } from "./utils/Vector";
import { Plotter } from "./utils/Plotter";
import { Colors } from "./utils/Colors";
import { NoBorder } from "./utils/Border";
import { Block } from "./Block";

// Interface for Context Menu
export interface IContextMenu {
	show(at: Vector): void
	hide(): void
	render(plotter: Plotter, block?: Block): void
}

// Context Menu class
export class ContextMenu implements IContextMenu {

	/**
	 * Class Members
	 */

	private isShowing: boolean = false
	private at: Vector | null = null
	private onBlock: Block | undefined = undefined

	/**
	 * Constructs a ContextMenu instance
	 */
	public constructor() {}

	/**
	 * Shows the context menu
	 * @param at The location of the cursor
	 * @param block If on a block then a reference to that block
	 */
	public show(at: Vector, block?: Block) {
		this.at = at
		this.onBlock = block
		this.isShowing = true
	}

	/**
	 * Hides the context menu
	 */
	public hide(): void {
		this.isShowing = false
		this.at = null
		this.onBlock = undefined
	}

	/**
	 * Render the context menu
	 * @param plotter Plotter for rendering
	 */
	public render(plotter: Plotter): void {
		if (this.isShowing && this.at) {
			if (this.onBlock) {
			} else {
				plotter.useColor(Colors.White)
				plotter.useBorder(new NoBorder())
				plotter.rectangle(this.at, new Vector(100, 200))
			}
		}
	}

}


// Interface for Context Menu Item
export interface IContextMenuItem {
	text: string
	render(): void
}

// Context Menu Item class
export class ContextMenuItem {

	/**
	 * Class Members
	 */

	public text: string

	/**
	 * Constructs a Context Menu Item instance
	 * @param text The text to display
	 */
	public constructor(text: string) {
		this.text = text
	}

	public render(plotter: Plotter): void {
		//
	}

}