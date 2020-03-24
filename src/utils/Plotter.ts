
// Imports
import p5 from 'p5'
import { Vector } from './Vector'

// Interface for Plotter class
export interface IPlotter {

	withOrigin(pos: Vector, callback: Function): void

	/**
	 * Shapes
	 */

	triangle(a: Vector, b: Vector, c: Vector): void
	rectangle(corner: Vector, scale: Vector): void

}

// Plotter Class
export class Plotter implements IPlotter {

	/**
	 * Class Members
	 */
	private sketch: p5

	public constructor(sketch: p5) {
		this.sketch = sketch
	}

	public withOrigin(pos: Vector, callback: Function) {
		this.sketch.push()
		this.sketch.translate(pos.x, pos.y)
		callback(this.sketch)
		this.sketch.pop()
	}

	public triangle(a: Vector, b: Vector, c: Vector) {
		this.sketch.triangle(
			a.x, a.y,
			b.x, b.y,
			c.x, c.y
		)
	}

	public rectangle(corner: Vector, scale: Vector) {
		this.withOrigin(corner, (sketch: p5) => {
			sketch.rectMode(sketch.CORNER)
			sketch.rect(0, 0, scale.x, scale.y)
		})
	}

}