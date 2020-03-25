
// Imports
import { Component, IComponent } from './../Component'
import { Vector } from './../../utils/Vector'
import { Colors } from './../../utils/Colors'
import { Border } from './../../utils/Border'

// Dropdown class
export class Dropdown extends Component implements IComponent {

	public constructor() {
		super()
	}

	public render(): void {
		if (this.plotter && this.sketch) {
			this.plotter.useColor(Colors.White)
			this.plotter.rectangle(new Vector(0, 0), new Vector(this.sketch.width/2, 60))
		}
	}

	public mouseClicked(): boolean {
		console.log("abcxyz...")
		return true
	}

}