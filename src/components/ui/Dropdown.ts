
// Imports
import { Component, IComponent } from './../Component'
import { Vector } from './../../utils/Vector'
import { Colors, Color } from './../../utils/Colors'
import { NoBorder } from './../../utils/Border'

// Dropdown class
export class Dropdown extends Component implements IComponent {

	public constructor() {
		super()
	}

	public render(): void {
		if (this.plotter && this.sketch) {
			this.plotter.useColor(Colors.Grey[900])
			this.plotter.rectangle(new Vector(10, 10), new Vector(80, 30), 5)
			this.plotter.text("Blocks", {
				pos: new Vector(15, 15),
				size: 15,
				color: Colors.Grey[200]
			})
		}
	}

	public mouseClicked(): boolean {
		console.log("abcxyz...")
		return true
	}

}