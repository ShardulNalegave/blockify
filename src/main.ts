
// Imports
import p5 from 'p5'
import { Blockify } from "./Blockify"
import { Vector } from './utils/Vector'
import { StartBlock } from './blocks/Start'

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

	// Blocks
	let block = new StartBlock(new Vector(200, 200), new Vector(100, 100))
	blockify.addBlock(block)

	// Run the render loop
	blockify.render()
}

new p5(main)