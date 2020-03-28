
// Imports
import { Padding } from './../utils/Padding'
import { Plotter } from '../utils/Plotter';
import { Vector } from '../utils/Vector';
import { Colors, Color } from '../utils/Colors';
import { IBorder, NoBorder } from '../utils/Border';

// Interface for Container Render Options
export interface IContainerRenderOptions {
	offset: Vector
	width: number
	height: number
	padding: Padding
}

// Interface for options passed to Container
export interface IContainerOptions {
	corner: Vector
	scale: Vector
	padding?: Padding
	borderRadius?: number | number[]
	color?: Color
	border?: IBorder
	render(plotter: Plotter, options: IContainerRenderOptions): void
}

// Interface for Container
export interface IContainer {
	corner: Vector
	scale: Vector
	padding: Padding
	borderRadius: number | number[]
	color: Color
	border: IBorder
	render(plotter: Plotter): void
}

// Container class
export class Container implements IContainer {

	public corner: Vector
	public scale: Vector
	public color: Color
	public border: IBorder
	public padding: Padding
	public borderRadius: number | number[]
	private options: IContainerOptions

	public constructor(options: IContainerOptions) {
		this.corner = options.corner
		this.scale = options.scale
		this.color = options.color || Colors.White
		this.border = options.border || new NoBorder()
		this.padding = options.padding || Padding.all(0)
		this.borderRadius = options.borderRadius || 0
		this.options = options
	}

	public render(plotter: Plotter): void {
		plotter.useBorder(this.border)
		plotter.useColor(this.color)
		plotter.rectangle(this.corner, this.scale, this.borderRadius)
		this.options.render(plotter, {
			height: this.scale.y - (this.padding.top + this.padding.bottom),
			width: this.scale.x - (this.padding.left + this.padding.right),
			offset: new Vector(this.corner.x + this.padding.left, this.corner.y + this.padding.top),
			padding: this.padding
		})
	}

}