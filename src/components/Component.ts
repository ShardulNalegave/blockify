
// Imports
import p5 from 'p5'
import { Plotter } from "../utils/Plotter";

// Base Inteface for Component class
export interface IComponentBase {
	components: IComponent[]
	attachSketch(sketch: p5, plotter: Plotter): void
	attachComponent(component: IComponent): void
	loadComponents(): void
	renderComponents(): void
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

	public components: IComponent[] = []

	public constructor() {}

	public attachSketch(sketch: p5, plotter: Plotter) {
		this.sketch = sketch
		this.plotter = plotter
		this.loadComponents()
	}

	public attachComponent(component: IComponent): void {
		component.attachSketch( <p5> this.sketch, <Plotter> this.plotter)
		this.components.push(component)
	}

	public loadComponents(): void {}

	public renderComponents(): void {
		for (let i = 0; i < this.components.length; i++) {
			const component: IComponent = this.components[i];
			component.render()
		}
	}

}