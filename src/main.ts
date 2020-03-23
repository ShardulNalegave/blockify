
// Imports
import { Blockify } from "./Blockify"

// Global variables
let screenDimensions = {
	width: window.innerWidth,
	height: window.innerHeight
}

// Get the canvas and initialize Blockify
const canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("canvas#mainCanvas")
const blockify: Blockify = new Blockify(canvas, screenDimensions.width, screenDimensions.height)

// Window events
window.onresize = () => {
	blockify.updateCanvasSize(window.innerWidth, window.innerHeight)
}

// Run the render loop
blockify.render()