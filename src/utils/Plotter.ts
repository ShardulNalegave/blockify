
// Imports
import { Vector } from './Vector'

// Interface for Plotter class
export interface IPlotter {

	withOrigin(pos: Vector): void

	/**
	 * Shapes
	 */

	triangle(a: Vector, b: Vector, c: Vector): void
	rectangle(corner: Vector, scale: Vector): void

}

// Plotter Class
@staticImplements<IPlotter>()
export class Plotter {

	public static withOrigin(pos: Vector) {}

	public static triangle(a: Vector, b: Vector, c: Vector) {}

	public static rectangle(corner: Vector, scale: Vector) {}

}

// Extras
function staticImplements<T>() {
	return <U extends T>(constructor: U) => {constructor};
}