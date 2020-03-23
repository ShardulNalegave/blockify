
const canvas = <HTMLCanvasElement> document.querySelector("canvas#mainCanvas")
canvas.setAttribute("width", "600")
canvas.setAttribute("height", "600")

const gl = canvas.getContext("webgl2")

if (gl === null) {
	console.error("Unable to access webgl")
} else {

	// Set clear color to black, fully opaque
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Clear the color buffer with specified clear color
  gl.clear(gl.COLOR_BUFFER_BIT);

}