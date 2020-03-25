
// Imports
import { Component, IComponent } from './../Component'
import { Vector } from './../../utils/Vector'
import { Colors } from './../../utils/Colors'
import { NoBorder } from './../../utils/Border'

// Dropdown class
export class Dropdown extends Component implements IComponent {

	public constructor() {
		super()
	}

	public render(): void {
		if (this.plotter && this.sketch) {
			this.plotter.useBorder(new NoBorder())
			this.plotter.useColor(Colors.Red[500])
			this.plotter.rectangle(new Vector(0, 0), new Vector(this.sketch.width/2, 60))
		}
	}

	public mouseClicked(): boolean {
		console.log("abcxyz...")
		return true
	}

}