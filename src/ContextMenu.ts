
// Imports
import { Vector } from "./utils/Vector";
import { Plotter } from "./utils/Plotter";
import { Colors, Color } from "./utils/Colors";
import { NoBorder, IBorder } from "./utils/Border";
import { Block } from "./Block";
import { Container, IContainerRenderOptions } from "./ui/Container";
import { Padding } from "./utils/Padding";

// Interface for Context Menu
export interface IContextMenu {
	config: ContextMenuConfig
	show(at: Vector, block?: Block): void
	hide(): void
	render(plotter: Plotter): void
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
					item.render(plotter, this.at.add(new Vector(0, i * 30)), {
						backgroundColor: this.config.backgroundColor || Colors.White,
						hoverBackgroundColor: this.config.hoverBackgroundColor || Colors.White,
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

	private isCursorOnTop(corner: Vector, cursor: Vector, scale: Vector): boolean {
		// The location of the opposite corner
		let oppositeCorner: Vector = (corner.add(scale))
		// Horizontal position
		if (cursor.x > corner.x && cursor.x < oppositeCorner.x) {
			// Vertical position
			if (cursor.y > corner.y && cursor.y < oppositeCorner.y) {
				return true
			}
			return false
		}
		return false
	}

	public render(plotter: Plotter, corner: Vector, options: {
		backgroundColor: Color,
		hoverBackgroundColor: Color,
		textColor: Color,
		border: IBorder
	}): void {
		let scale: Vector = new Vector(150, 30)
		new Container({
			corner,
			color: this.isCursorOnTop(corner, plotter.cursorPos, scale) ? options.hoverBackgroundColor : options.backgroundColor,
			border: options.border,
			padding: Padding.all(8),
			scale,
			render: (plotter: Plotter, renderOptions: IContainerRenderOptions) => {
				plotter.useBorder(new NoBorder())
				plotter.text(this.text, {
					pos: renderOptions.offset,
					size: renderOptions.height,
					color: options.textColor,
					boxScale: new Vector(renderOptions.width, renderOptions.height)
				})
			}
		}).render(plotter)
	}

}


// Interface for Context Menu Config
export interface ContextMenuConfig {
	backgroundColor?: Color
	hoverBackgroundColor?: Color
	textColor?: Color
	border?: IBorder	
	canvas: ContextMenuItem[]
	block: ContextMenuItem[]
}