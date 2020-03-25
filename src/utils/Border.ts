
// Imports
import { Colors, Color } from './Colors'

// Interface for Border class
export interface IBorder {
	color: Color | null
	size: number | null	
}

// Border class
export class Border implements IBorder {

	public color: Color = Colors.Black
	public size: number = 1

	// Constructs a Border instance
	public constructor(color: Color, size: number) {
		this.color = color
		this.size = size
	}

}

// No Border class
export class NoBorder implements IBorder {

	public color: null = null
	public size: null = null

	// Constructs a NoBorder instance
	public constructor() {}

}