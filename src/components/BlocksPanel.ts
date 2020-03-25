
// Imports
import { Component, IComponent } from './Component'
import { Vector } from '../utils/Vector'
import { Colors } from '../utils/Colors'
import { Border } from './../utils/Border'

import { Dropdown } from './ui/Dropdown'

// Blocks Panel class
export class BlocksPanel extends Component implements IComponent {

	public constructor() {
		super()
	}

	public render(): void {
		if (this.plotter && this.sketch) {
			this.plotter.useBorder(new Border(Colors.Red[800], 5))
			this.plotter.useColor(Colors.Teal[800])
			this.plotter.rectangle(new Vector(0, 0), new Vector(this.sketch.width, 60))

			this.renderComponents()
		}
	}

	public loadComponents(): void {
		// Add the dropdown
		this.attachComponent(new Dropdown())
	}

	public mouseClicked(): boolean {
		console.log("abcxyz...")
		return true
	}

}