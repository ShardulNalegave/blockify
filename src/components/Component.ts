
// Imports
import p5 from 'p5'
import { Plotter } from "../utils/Plotter";

// Base Inteface for Component class
export interface IComponentBase {
	attachSketch(sketch: p5, plotter: Plotter): void
}

// Inteface for Components
export interface IComponent extends IComponentBase {
	render(): void
	mouseClicked(): boolean
}

// Component class
export class Component implements IComponentBase {

	public sketch: p5 | null = null
	public plotter: Plotter | null = null

	public constructor() {}

	public attachSketch(sketch: p5, plotter: Plotter) {
		this.sketch = sketch
		this.plotter = plotter
	}

}