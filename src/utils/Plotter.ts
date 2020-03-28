
// Imports
import p5 from 'p5'
import { Vector } from './Vector'
import { Color } from './Colors'
import { IBorder } from './Border'

// Interface for Text options
export interface ITextOptions {
	pos: Vector,
	size: number,
	color?: Color,
	boxScale?: Vector
}

// Interface for Plotter class
export interface IPlotter {

	cursorPos: Vector
	updateCursorPos(pos: Vector): void

	withOrigin(pos: Vector, callback: Function): void

	/**
	 * Shapes
	 */

	triangle(a: Vector, b: Vector, c: Vector): void
	rectangle(corner: Vector, scale: Vector, borderRadius: number): void
	ellipse(origin: Vector, radius: number, radius2?: number): void

	text(text: string, options: ITextOptions): void

	/**
	 * Other Methods
	 */

	useColor(color: Color): void
	useBorder(border: IBorder): void

	cursor(type: string): void

}

// Plotter Class
export class Plotter implements IPlotter {

	/**
	 * Class Members
	 */
	private sketch: p5
	private parent: HTMLElement
	public cursorPos: Vector = new Vector(0, 0)

	/**
	 * Constructs a Plotter instance
	 * @param sketch The sketch to draw on
	 */
	public constructor(sketch: p5, parent: HTMLElement) {
		this.sketch = sketch
		this.parent = parent
	}

	/**
	 * Updates cursor position variable
	 * @param pos The new position
	 */
	public updateCursorPos(pos: Vector): void {
		this.cursorPos = pos
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
	public rectangle(corner: Vector, scale: Vector, borderRadius?: number | number[]) {
		// Shift the origin to the position of the corner
		this.withOrigin(corner, (sketch: p5) => {
			// Set rectMode to Corner so that drawing starts from corner
			sketch.rectMode(sketch.CORNER)
			if (borderRadius) {
				if (typeof(borderRadius) === "number") {
					// Draw the rect at new origin with the given scale
					sketch.rect(0, 0, scale.x, scale.y, borderRadius)
				} else {
					// Draw the rect at new origin with the given scale
					sketch.rect(0, 0, scale.x, scale.y, borderRadius[0], borderRadius[1], borderRadius[2], borderRadius[3])
				}
			} else {
				// Draw the rect at new origin with the given scale
				sketch.rect(0, 0, scale.x, scale.y)
			}
		})
	}

	/**
	 * Draws an ellipse
	 * @param origin The origin of the ellipse
	 * @param radius The radius of the ellipse
	 * @param radius2 Optional radius for y-axis (by default both are equal)
	 */
	public ellipse(origin: Vector, radius: number, radius2?: number): void {
		// Shift the origin
		this.withOrigin(origin, (sketch: p5) => {
			if (radius2) {
				// If 2 radii are provided
				sketch.ellipse(0, 0, radius * 2, radius2 * 2)
			} else {
				// If only one radius is provided
				sketch.ellipse(0, 0, radius * 2, radius * 2)
			}
		})
	}

	/**
	 * Renders text on canvas
	 * @param text The text to render
	 * @param options Options for rendering (ITextOptions)
	 */
	public text(text: string, options: ITextOptions): void {
		this.withOrigin(options.pos, (sketch: p5) => {
			sketch.textSize(options.size)
			if (options.color) {
				sketch.fill(options.color.r, options.color.g, options.color.b)
			} else {
				sketch.fill(0)
			}
			if (options.boxScale) {
				sketch.rectMode(sketch.CORNER)
				sketch.text(text, 0, 0, options.boxScale.x, options.boxScale.y)
			} else {
				sketch.text(text, 0, 0)
			}
		})
	}


	/**
	 * Other Methods
	 */

	/**
	 * Sets the color to use for rendering
	 * @param color The color to set
	 */
	public useColor(color: Color) {
		this.sketch.fill(color.r, color.g, color.b)
	}
	
	/**
	 * Sets the border to use for borders
	 * @param border The border to set
	 */
	public useBorder(border: IBorder): void {
		if (border.color === null && border.size === null) {
			//// If border is set to NoBorder
			// Set the default border config so that after enabling again it is normal only
			this.sketch.strokeWeight(1)
			this.sketch.stroke(0)
			// Disable borders
			this.sketch.noStroke()
		} else if (border.color !== null && border.size !== null) {
			// Set the new border color
			this.sketch.stroke(border.color.r, border.color.g, border.color.b)
			// Set the new border size
			this.sketch.strokeWeight(border.size)
		}
	}

	/**
	 * Changes cursor type
	 * @param type The type to set
	 */
	public cursor(type: string): void {
		this.parent.style.cursor = type
	}

}