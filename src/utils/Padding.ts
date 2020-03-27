
// Padding class
export class Padding {

	/**
	 * Class Members
	 */

	// Top padding
	public top: number
	// Bottom padding
	public bottom: number
	// Left padding
	public left: number
	// Right padding
	public right: number

	// Constructs a padding instance
	public constructor(top: number, bottom: number, left: number, right: number) {
		this.top = top
		this.bottom = bottom
		this.left = left
		this.right = right
	}

	/**
	 * Returns a Padding instance with equal padding values for all sides
	 * @param val Padding
	 */
	public static all(val: number): Padding {
		return new Padding(val, val, val, val)
	}

	/**
	 * Returns a padding instance
	 * @param top Top padding
	 * @param bottom Bottom padding
	 * @param left Left padding
	 * @param right Right padding
	 */
	public static only(top: number, bottom: number, left: number, right: number): Padding {
		return new Padding(top, bottom, left, right)
	}

}