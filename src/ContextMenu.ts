
// Imports
import { Vector } from "./utils/Vector";
import { Plotter } from "./utils/Plotter";
import { Colors } from "./utils/Colors";
import { NoBorder } from "./utils/Border";

// Interface for Context Menu
export interface IContextMenu {
	show(at: Vector): void
	hide(): void
	render(plotter: Plotter): void
}

// Context Menu class
export class ContextMenu implements IContextMenu {

	private isShowing: boolean = false
	private at: Vector | null = null

	public constructor() {}

	public show(at: Vector) {
		this.at = at
		this.isShowing = true
	}

	public hide(): void {
		this.isShowing = false
		this.at = null
	}

	public render(plotter: Plotter): void {
		if (this.isShowing && this.at) {
			plotter.useColor(Colors.White)
			plotter.useBorder(new NoBorder())
			plotter.rectangle(this.at, new Vector(100, 200))
		}
	}

}