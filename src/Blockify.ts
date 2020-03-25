
// Utils
import p5 from 'p5'
import { Vector } from './utils/Vector'
import { Plotter } from './utils/Plotter'
import { IComponent } from './components/Component'

// The interface for the options passed to Blockify during intialization
export interface IBlockifyOptions {
	width: number,
	height: number,
	parent?: HTMLElement
}

// Interface for main Blockify class
export interface IBlockify {
	updateCanvasSize(width: number, height: number): void
	render(): void
}

// The Blockify Class
export class Blockify implements IBlockify {

	/**
	 * Class Members
	 */

	private sketch: p5
	private size: Vector = new Vector(300, 300)
	private parent: HTMLElement | undefined
	private plotter: Plotter
	private attachedComponents: IComponent[] = []

	/**
	 * Constructs a Blockify instance
	 * @param p5Instance p5.js Instance to use
	 * @param options Options to configure Blockify
	 */
	public constructor(p5Instance: p5, options: IBlockifyOptions) {
		this.sketch = p5Instance
		this.plotter = new Plotter(this.sketch)
		let {
			width,
			height,
			parent
		} = options
		this.size = new Vector(width, height)
		this.parent = parent
		
		// Register sketch events to local methods
		this.sketch.setup = () => {
			this.render()
		}
		this.sketch.draw = () => {
			this.loop()
		}

		/**
		 * Mouse Events
		 */

		// Mouse Pressed
		this.sketch.mouseClicked = () => {
			this.mouseClicked()
			// Loop through all the components in reversed order
			// Note:- The array is reversed so that the topmost element receives the event first
			let components: IComponent[] = this.attachedComponents.reverse()
			for (let i = 0; i < components.length; i++) {
				const component: IComponent = components[i]
				// If the event belongs to the current component then break the loop
				if (component.mouseClicked()) break
			}
		}
	}

	/**
	 * Updates the size of the canvas
	 * @param width The new width
	 * @param height The new height
	 */
	public updateCanvasSize(width: number, height: number) {
		this.size = new Vector(width, height)
		this.sketch.resizeCanvas(this.size.x, this.size.y)
	}

	/**
	 * Start point for rendering
	 */
	public render() {
		let canvas = this.sketch.createCanvas(this.size.x, this.size.y)
		if (this.parent) {
			canvas.parent(this.parent)
		}
	}

	/**
	 * The render loop
	 */
	private loop() {
		this.sketch.background(0)
		// Loop through all the components to render
		// Note:- This way the last member of array will be the topmost component on the canvas
		for (let i = 0; i < this.attachedComponents.length; i++) {
			const component: IComponent = this.attachedComponents[i]
			component.render()
		}
	}


	/**
	 * Other Events
	 */

	private mouseClicked(): void {}


	/**
	 * User Methods
	 */

	/**
	 * Attachs a component to the blockify app
	 * @param component The component to be added
	 */
	public attachComponent(component: IComponent): void {
		// Attach the sketch and plotter
		component.attachSketch(this.sketch, this.plotter)
		// Add the component to attached components array
		this.attachedComponents.push(component)
	}

}