
export interface IVector {
	x: number,
	y: number,
	magnitude(): number
	add(vec: Vector): Vector
	minus(vec: Vector): Vector
	multiply(vec: Vector): Vector
	divide(vec: Vector): Vector
}

export class Vector implements IVector {}