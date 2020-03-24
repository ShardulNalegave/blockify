
// Iterface for a Color
export interface IColor {
	r: number
	g: number
	b: number
	hex: string
}

// Convert Hex value to RGB
function hexToRgb(hex: string): number[] {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
	] : [ 0, 0, 0 ];
}

// Color class
export class Color implements IColor {

	public hex: string
	public r: number
	public g: number
	public b: number

	public constructor(hex: string) {
		this.hex = hex
		let rgb = hexToRgb(this.hex)
		this.r = rgb[0]
		this.g = rgb[1]
		this.b = rgb[2]
	}

}

// Colors namespace
namespace Colors {

	export class Red {
		public static 100: Color = new Color("")
	}

}
