
// Imports
import p5 from 'p5'
import { Blockify } from "./Blockify"
import { BlocksPanel } from './components/BlocksPanel'

// Global variables
let screenDimensions = {
	width: window.innerWidth,
	height: window.innerHeight
}

function main(p: p5) {
	// Get the canvas and initialize Blockify
	const appDiv: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("div#app")
	const blockify: Blockify = new Blockify(p, {
		width: screenDimensions.width,
		height: screenDimensions.height,
		parent: appDiv
	})

	// Window events
	window.addEventListener("resize", () => {
		blockify.updateCanvasSize(window.innerWidth, window.innerHeight)
	})

	// Components
	const panel = new BlocksPanel()
	blockify.attachBlocksPanel(panel)

	// Run the render loop
	blockify.render()
}

new p5(main)