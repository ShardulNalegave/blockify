
export interface IVector {
	x: number,
	y: number,
	add(vec: Vector): Vector
	minus(vec: Vector): Vector
	multiply(vec: Vector): Vector
	divide(vec: Vector): Vector
	magnitude(): number
}

export class Vector implements IVector {

	public x: number
	public y: number

	public constructor(x: number, y: number) {
		this.x = x
		this.y = y
	}

	public add(vec: Vector): Vector {
		let x_: number = this.x + vec.x
		let y_: number = this.y + vec.y
		return new Vector(x_, y_)
	}

	public minus(vec: Vector): Vector {
		let x_: number = this.x - vec.x
		let y_: number = this.y - vec.y
		return new Vector(x_, y_)
	}

	public multiply(vec: Vector): Vector {
		let x_: number = this.x * vec.x
		let y_: number = this.y * vec.y
		return new Vector(x_, y_)
	}

	public divide(vec: Vector): Vector {
		let x_: number = this.x / vec.x
		let y_: number = this.y / vec.y
		return new Vector(x_, y_)
	}

	public magnitude(): number {
		let mag: number = Math.sqrt((this.x)^2 + (this.y)^2)
		return mag
	}

}