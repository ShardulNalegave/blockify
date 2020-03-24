
// Imports
import p5 from 'p5'
import { Vector } from './Vector'
import { Color } from './Colors'

// Interface for Plotter class
export interface IPlotter {

	withOrigin(pos: Vector, callback: Function): void

	/**
	 * Shapes
	 */

	triangle(a: Vector, b: Vector, c: Vector): void
	rectangle(corner: Vector, scale: Vector): void

	/**
	 * Other Methods
	 */

	useColor(color: Color): void

}

// Plotter Class
export class Plotter implements IPlotter {

	/**
	 * Class Members
	 */
	private sketch: p5

	/**
	 * Constructs a Plotter instance
	 * @param sketch The sketch to draw on
	 */
	public constructor(sketch: p5) {
		this.sketch = sketch
	}

	/**
	 * Shifts the origin
	 * @param pos The position of new origin
	 * @param callback The code to execute with the new origin
	 */
	public withOrigin(pos: Vector, callback: Function) {
		// Push a new matrix so that other objects are not affected
		this.sketch.push()
		// Shift the origin
		this.sketch.translate(pos.x, pos.y)
		// Call the callback to execute the code
		callback(this.sketch)
		// Pop the matrix
		this.sketch.pop()
	}

	/**
	 * Renders a triangle
	 * @param a 1st vertex
	 * @param b 2nd vertex
	 * @param c 3rd vertex
	 */
	public triangle(a: Vector, b: Vector, c: Vector) {
		this.sketch.triangle(
			a.x, a.y,
			b.x, b.y,
			c.x, c.y
		)
	}

	/**
	 * Renders a rectangle
	 * @param corner The position of the top-left corner
	 * @param scale The width and height of the rectangle
	 */
	public rectangle(corner: Vector, scale: Vector) {
		// Shift the origin to the position of the corner
		this.withOrigin(corner, (sketch: p5) => {
			// Set rectMode to Corner so that drawing starts from corner
			sketch.rectMode(sketch.CORNER)
			// Draw the rect at new origin with the given scale
			sketch.rect(0, 0, scale.x, scale.y)
		})
	}


	/**
	 * Other Methods
	 */

	/**
	 * Sets the color to use for renderinf
	 * @param color The color to set
	 */
	public useColor(color: Color) {
		this.sketch.fill(color.r, color.g, color.b)
	}

}