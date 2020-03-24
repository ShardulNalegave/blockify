
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
export namespace Colors {

	export let Black: Color = new Color("#000000")
	export let White: Color = new Color("#FFFFFF")

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

	export class Pink {
		public static 50: Color = new Color("#FCE4EC")
		public static 100: Color = new Color("#F8BBD0")
		public static 200: Color = new Color("#F48FB1")
		public static 300: Color = new Color("#F06292")
		public static 400: Color = new Color("#EC407A")
		public static 500: Color = new Color("#E91E63")
		public static 600: Color = new Color("#D81B60")
		public static 700: Color = new Color("#C2185B")
		public static 800: Color = new Color("#AD1457")
		public static 900: Color = new Color("#880E4F")
	}

	export class Purple {
		public static 50: Color = new Color("#FCE4EC")
		public static 100: Color = new Color("#F8BBD0")
		public static 200: Color = new Color("#F48FB1")
		public static 300: Color = new Color("#F06292")
		public static 400: Color = new Color("#EC407A")
		public static 500: Color = new Color("#E91E63")
		public static 600: Color = new Color("#D81B60")
		public static 700: Color = new Color("#C2185B")
		public static 800: Color = new Color("#AD1457")
		public static 900: Color = new Color("#880E4F")
	}

	export class DeepPurple {
		public static 50: Color = new Color("#EDE7F6")
		public static 100: Color = new Color("#D1C4E9")
		public static 200: Color = new Color("#B39DDB")
		public static 300: Color = new Color("#9575CD")
		public static 400: Color = new Color("#7E57C2")
		public static 500: Color = new Color("#673AB7")
		public static 600: Color = new Color("#5E35B1")
		public static 700: Color = new Color("#512DA8")
		public static 800: Color = new Color("#4527A0")
		public static 900: Color = new Color("#311B92")
	}

	export class Indigo {
		public static 50: Color = new Color("#E8EAF6")
		public static 100: Color = new Color("#C5CAE9")
		public static 200: Color = new Color("#9FA8DA")
		public static 300: Color = new Color("#7986CB")
		public static 400: Color = new Color("#5C6BC0")
		public static 500: Color = new Color("#3F51B5")
		public static 600: Color = new Color("#3949AB")
		public static 700: Color = new Color("#303F9F")
		public static 800: Color = new Color("#283593")
		public static 900: Color = new Color("#1A237E")
	}

	export class Blue {
		public static 50: Color = new Color("#E3F2FD")
		public static 100: Color = new Color("#BBDEFB")
		public static 200: Color = new Color("#90CAF9")
		public static 300: Color = new Color("#64B5F6")
		public static 400: Color = new Color("#42A5F5")
		public static 500: Color = new Color("#2196F3")
		public static 600: Color = new Color("#1E88E5")
		public static 700: Color = new Color("#1976D2")
		public static 800: Color = new Color("#1565C0")
		public static 900: Color = new Color("#0D47A1")
	}

	export class LightBlue {
		public static 50: Color = new Color("#E1F5FE")
		public static 100: Color = new Color("#B3E5FC")
		public static 200: Color = new Color("#81D4FA")
		public static 300: Color = new Color("#4FC3F7")
		public static 400: Color = new Color("#29B6F6")
		public static 500: Color = new Color("#03A9F4")
		public static 600: Color = new Color("#039BE5")
		public static 700: Color = new Color("#0288D1")
		public static 800: Color = new Color("#0277BD")
		public static 900: Color = new Color("#01579B")
	}

	export class Cyan {
		public static 50: Color = new Color("#E0F7FA")
		public static 100: Color = new Color("#B2EBF2")
		public static 200: Color = new Color("#80DEEA")
		public static 300: Color = new Color("#4DD0E1")
		public static 400: Color = new Color("#26C6DA")
		public static 500: Color = new Color("#00BCD4")
		public static 600: Color = new Color("#00ACC1")
		public static 700: Color = new Color("#0097A7")
		public static 800: Color = new Color("#00838F")
		public static 900: Color = new Color("#006064")
	}

	export class Teal {
		public static 50: Color = new Color("#E0F2F1")
		public static 100: Color = new Color("#B2DFDB")
		public static 200: Color = new Color("#80CBC4")
		public static 300: Color = new Color("#4DB6AC")
		public static 400: Color = new Color("#26A69A")
		public static 500: Color = new Color("#009688")
		public static 600: Color = new Color("#00897B")
		public static 700: Color = new Color("#00796B")
		public static 800: Color = new Color("#00695C")
		public static 900: Color = new Color("#004D40")
	}

	export class Green {
		public static 50: Color = new Color("#E8F5E9")
		public static 100: Color = new Color("#C8E6C9")
		public static 200: Color = new Color("#A5D6A7")
		public static 300: Color = new Color("#81C784")
		public static 400: Color = new Color("#66BB6A")
		public static 500: Color = new Color("#4CAF50")
		public static 600: Color = new Color("#43A047")
		public static 700: Color = new Color("#388E3C")
		public static 800: Color = new Color("#2E7D32")
		public static 900: Color = new Color("#1B5E20")
	}

	export class LightGreen {
		public static 50: Color = new Color("#F1F8E9")
		public static 100: Color = new Color("#DCEDC8")
		public static 200: Color = new Color("#C5E1A5")
		public static 300: Color = new Color("#AED581")
		public static 400: Color = new Color("#9CCC65")
		public static 500: Color = new Color("#8BC34A")
		public static 600: Color = new Color("#7CB342")
		public static 700: Color = new Color("#689F38")
		public static 800: Color = new Color("#558B2F")
		public static 900: Color = new Color("#33691E")
	}

	export class Lime {
		public static 50: Color = new Color("#F9FBE7")
		public static 100: Color = new Color("#F0F4C3")
		public static 200: Color = new Color("#E6EE9C")
		public static 300: Color = new Color("#DCE775")
		public static 400: Color = new Color("#D4E157")
		public static 500: Color = new Color("#CDDC39")
		public static 600: Color = new Color("#C0CA33")
		public static 700: Color = new Color("#AFB42B")
		public static 800: Color = new Color("#9E9D24")
		public static 900: Color = new Color("#827717")
	}

	export class Yellow {
		public static 50: Color = new Color("#FFFDE7")
		public static 100: Color = new Color("#FFF9C4")
		public static 200: Color = new Color("#FFF59D")
		public static 300: Color = new Color("#FFF176")
		public static 400: Color = new Color("#FFEE58")
		public static 500: Color = new Color("#FFEB3B")
		public static 600: Color = new Color("#FDD835")
		public static 700: Color = new Color("#FBC02D")
		public static 800: Color = new Color("#F9A825")
		public static 900: Color = new Color("#F57F17")
	}

	export class Amber {
		public static 50: Color = new Color("#FFF8E1")
		public static 100: Color = new Color("#FFECB3")
		public static 200: Color = new Color("#FFE082")
		public static 300: Color = new Color("#FFD54F")
		public static 400: Color = new Color("#FFCA28")
		public static 500: Color = new Color("#FFC107")
		public static 600: Color = new Color("#FFB300")
		public static 700: Color = new Color("#FFA000")
		public static 800: Color = new Color("#FF8F00")
		public static 900: Color = new Color("#FF6F00")
	}

	export class Orange {
		public static 50: Color = new Color("#FFF3E0")
		public static 100: Color = new Color("#FFE0B2")
		public static 200: Color = new Color("#FFCC80")
		public static 300: Color = new Color("#FFB74D")
		public static 400: Color = new Color("#FFA726")
		public static 500: Color = new Color("#FF9800")
		public static 600: Color = new Color("#FB8C00")
		public static 700: Color = new Color("#F57C00")
		public static 800: Color = new Color("#EF6C00")
		public static 900: Color = new Color("#E65100")
	}

	export class DeepOrange {
		public static 50: Color = new Color("#FBE9E7")
		public 100: Color = new Color("#FFCCBC")
		public 200: Color = new Color("#FFAB91")
		public 300: Color = new Color("#FF8A65")
		public 400: Color = new Color("#FF7043")
		public 500: Color = new Color("#FF5722")
		public 600: Color = new Color("#F4511E")
		public 700: Color = new Color("#E64A19")
		public 800: Color = new Color("#D84315")
		public 900: Color = new Color("#BF360C")
	}

	export class Brown {
		public static 50: Color = new Color("#EFEBE9")
		public static 100: Color = new Color("#D7CCC8")
		public static 200: Color = new Color("#BCAAA4")
		public static 300: Color = new Color("#A1887F")
		public static 400: Color = new Color("#8D6E63")
		public static 500: Color = new Color("#795548")
		public static 600: Color = new Color("#6D4C41")
		public static 700: Color = new Color("#5D4037")
		public static 800: Color = new Color("#4E342E")
		public static 900: Color = new Color("#3E2723")
	}

	export class Grey {
		public static 50: Color = new Color("#FAFAFA")
		public static 100: Color = new Color("#F5F5F5")
		public static 200: Color = new Color("#EEEEEE")
		public static 300: Color = new Color("#E0E0E0")
		public static 400: Color = new Color("#BDBDBD")
		public static 500: Color = new Color("#9E9E9E")
		public static 600: Color = new Color("#757575")
		public static 700: Color = new Color("#616161")
		public static 800: Color = new Color("#424242")
		public static 900: Color = new Color("#212121")
	}

	export class BlueGrey {
		public static 50: Color = new Color("#ECEFF1")
		public static 100: Color = new Color("#CFD8DC")
		public static 200: Color = new Color("#B0BEC5")
		public static 300: Color = new Color("#90A4AE")
		public static 400: Color = new Color("#78909C")
		public static 500: Color = new Color("#607D8B")
		public static 600: Color = new Color("#546E7A")
		public static 700: Color = new Color("#455A64")
		public static 800: Color = new Color("#37474F")
		public static 900: Color = new Color("#263238")
	}

}
