
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
		public static 50: Color = new Color("#FFEBEE")
		public static 100: Color = new Color("#FFCDD2")
		public static 200: Color = new Color("#EF9A9A")
		public static 300: Color = new Color("#E57373")
		public static 400: Color = new Color("#EF5350")
		public static 500: Color = new Color("#F44336")
		public static 600: Color = new Color("#E53935")
		public static 700: Color = new Color("#D32F2F")
		public static 800: Color = new Color("#C62828")
		public static 900: Color = new Color("#B71C1C")
	}

}
