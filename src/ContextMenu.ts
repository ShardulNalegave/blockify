
// Imports
import { Vector } from "./utils/Vector";
import { Plotter } from "./utils/Plotter";
import { Colors, Color } from "./utils/Colors";
import { NoBorder, IBorder } from "./utils/Border";
import { Block } from "./Block";
import { Container, IContainerRenderOptions } from "./ui/Container";

// Interface for Context Menu
export interface IContextMenu {
	config: ContextMenuConfig
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
	public config: ContextMenuConfig

	/**
	 * Constructs a ContextMenu instance
	 */
	public constructor(contextMenuConfig: ContextMenuConfig) {
		this.config = contextMenuConfig
	}

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
				for (let i = 0; i < this.config.canvas.length; i++) {
					const item = this.config.canvas[i];
					item.render(plotter, this.at, {
						backgroundColor: this.config.backgroundColor || Colors.White,
						textColor: this.config.textColor || Colors.Black,
						border: this.config.border || new NoBorder()
					})
				}
			}
		}
	}

}


// Interface for Context Menu Item
export interface IContextMenuItem {
	text: string
	render(plotter: Plotter, corner: Vector): void
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

	public render(plotter: Plotter, corner: Vector, options: {
		backgroundColor: Color,
		textColor: Color,
		border: IBorder
	}): void {
		new Container({
			corner,
			color: options.backgroundColor,
			border: options.border,
			scale: new Vector(100, 20),
			render(plotter: Plotter, renderOptions: IContainerRenderOptions) {
				plotter.text("ABC", {
					pos: new Vector(0, 0),
					size: 15,
					color: Colors.White
				})
			}
		}).render(plotter)
	}

}


// Interface for Context Menu Config
export interface ContextMenuConfig {
	backgroundColor?: Color
	textColor?: Color
	border?: IBorder	
	canvas: ContextMenuItem[]
	block: ContextMenuItem[]
}