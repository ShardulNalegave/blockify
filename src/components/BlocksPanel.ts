
import p5 from 'p5'
import { Component } from './Component'
import { Plotter } from './../utils/Plotter'

export class BlocksPanel implements Component {

	private sketch: p5 | null = null
	private plotter: Plotter | null = null

	public constructor() {}

	public attachSketch(sketch: p5, plotter: Plotter): void {
		this.sketch = sketch
		this.plotter = plotter
	}

	public render(): void {}

	public mouseClicked(): void {
		console.log("abcxyz...")
	}

}