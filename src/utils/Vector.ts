
// Interface for Vectors
export interface IVector {
	// The x co-ordinate
	x: number
	// The y co-ordinate
	y: number

	/**
	 * Operations 
	 */

	// Adds two vectors
	add(vec: Vector): Vector
	// Substracts two vectors
	minus(vec: Vector): Vector
	// Multiplies two vectors
	multiply(vec: Vector): Vector
	// Dividers two vectors
	divide(vec: Vector): Vector

	/**
	 * Methods
	 */

	// Returns the magnitude of vector
	magnitude(): number
}


// The Vector utility class
export class Vector implements IVector {

	/**
	 * Class Members
	 */
	public x: number
	public y: number

	/**
	 * Constructs a Vector instance
	 * @param x The x co-ordinate
	 * @param y The y co-ordinate
	 */
	public constructor(x: number, y: number) {
		this.x = x
		this.y = y
	}

	/**
	 * Adds two vectors
	 * @param vec The vector to add
	 */
	public add(vec: Vector): Vector {
		let x_: number = this.x + vec.x
		let y_: number = this.y + vec.y
		return new Vector(x_, y_)
	}

	/**
	 * Substracts two vectors
	 * @param vec The vector to substract
	 */
	public minus(vec: Vector): Vector {
		let x_: number = this.x - vec.x
		let y_: number = this.y - vec.y
		return new Vector(x_, y_)
	}

	/**
	 * Multiplies two vectors
	 * @param vec The vector to multiply with
	 */
	public multiply(vec: Vector): Vector {
		let x_: number = this.x * vec.x
		let y_: number = this.y * vec.y
		return new Vector(x_, y_)
	}

	/**
	 * Divides two vectors
	 * @param vec The divisor vector
	 */
	public divide(vec: Vector): Vector {
		let x_: number = this.x / vec.x
		let y_: number = this.y / vec.y
		return new Vector(x_, y_)
	}

	/**
	 * Returns the magnitude of the vector
	 * 
	 * Formula -> √[ (x)(x) + (y)(y) ] ==> Pythagorus Theorem
	 */
	public magnitude(): number {
		let mag: number = Math.sqrt((this.x)^2 + (this.y)^2)
		return mag
	}

}