
// Imports
import p5 from 'p5'
import { Blockify } from "../src/Blockify"
import { Vector } from '../src/utils/Vector'
import { StartBlock } from './blocks/Start'
import { Colors } from '../src/utils/Colors'
import { ContextMenuItem } from '../src/ContextMenu'

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
		parent: appDiv,
		primaryColor: Colors.Grey[900],
		accentColor: Colors.Grey[400],
		backgroundDesign: "dots",
		contextMenu: {
			canvas: [
				new ContextMenuItem("Delete")
			],
			block: []
		}
	})

	// Window events
	window.addEventListener("resize", () => {
		blockify.updateCanvasSize(window.innerWidth, window.innerHeight)
	})

	// Blocks
	let block = new StartBlock(new Vector(200, 200), new Vector(100, 100))
	blockify.addBlock(block)
	let block2 = new StartBlock(new Vector(400, 400), new Vector(200, 100))
	blockify.addBlock(block2)

	// Run the render loop
	blockify.render()
}

new p5(main)