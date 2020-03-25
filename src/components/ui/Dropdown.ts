
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
			this.plotter.useColor(Colors.Grey[800])
			this.plotter.rectangle(new Vector(10, 10), new Vector(100, 30), 5)
		}
	}

	public mouseClicked(): boolean {
		console.log("abcxyz...")
		return true
	}

}