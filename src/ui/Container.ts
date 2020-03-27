
// Imports
import { Padding } from './../utils/Padding'
import { Plotter } from '../utils/Plotter';
import { Vector } from '../utils/Vector';

// Interface for options passed to Container
export interface IContainerOptions {
	corner: Vector
	padding?: Padding
	borderRadius?: number
	render(plotter: Plotter): void
}

// Interface for Container
export interface IContainer {
	corner: Vector
	padding: Padding
	borderRadius: number
	render(plotter: Plotter): void
}

// Container class
export class Container implements IContainer {

	public corner: Vector
	public padding: Padding
	public borderRadius: number
	private options: IContainerOptions

	public constructor(options: IContainerOptions) {
		this.corner = options.corner
		this.padding = options.padding || Padding.all(0)
		this.borderRadius = options.borderRadius || 0
		this.options = options
	}

	public render(plotter: Plotter): void {}

}