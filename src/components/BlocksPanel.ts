
// Imports
import p5 from 'p5'
import { Component } from './Component'
import { Plotter } from './../utils/Plotter'
import { Vector } from '../utils/Vector'
import { Colors } from '../utils/Colors'
import { Border } from './../utils/Border'

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
			this.plotter.useBorder(new Border(Colors.Red[800], 5))
			this.plotter.useColor(Colors.Teal[800])
			this.plotter.rectangle(new Vector(0, 0), new Vector(this.sketch.width, 60))
		}
	}

	public mouseClicked(): void {
		console.log("abcxyz...")
	}

}