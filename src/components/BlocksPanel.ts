
// Imports
import p5 from 'p5'
import { Component } from './Component'
import { Plotter } from './../utils/Plotter'
import { Vector } from '../utils/Vector'
import { Colors } from '../utils/Colors'

// Blocks Panel class
export class BlocksPanel implements Component {

	private sketch: p5 | null = null
	private plotter: Plotter | null = null

	public constructor() {}

	public attachSketch(sketch: p5, plotter: Plotter): void {
		this.sketch = sketch
		this.plotter = plotter
	}

	public render(): void {
		if (this.plotter && this.sketch) {
			this.plotter.useColor(Colors.Teal[800])
			this.plotter.rectangle(new Vector(0, 0), new Vector(this.sketch.width, 20))
		}
	}

	public mouseClicked(): void {
		console.log("abcxyz...")
	}

}