
// Imports
import p5 from 'p5'
import { Blockify } from "../src/Blockify"
import { Vector } from '../src/utils/Vector'
import { Colors } from '../src/utils/Colors'
import { ContextMenuItem } from '../src/ContextMenu'
import { Border, NoBorder } from '../src/utils/Border'
import { EventBlock } from '../src/blocks/Event'
import { Plotter } from '../src/utils/Plotter'
import { Block } from '../src/Block'
import { Container, IContainerRenderOptions } from '../src/ui/Container'
import { Padding } from '../src/utils/Padding'

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
			backgroundColor: Colors.Grey[800],
			hoverBackgroundColor: Colors.Grey[600],
			textColor: Colors.Grey[200],
			border: new Border(Colors.Black, 1),
			canvas: [
				new ContextMenuItem("New", () => {
					console.log("Creating a new block...")
				}),
				new ContextMenuItem("Zoom in"),
				new ContextMenuItem("Zoom out")
			],
			block: [
				new ContextMenuItem("Edit"),
				new ContextMenuItem("Delete")
			]
		}
	})

	// Window events
	window.addEventListener("resize", () => {
		blockify.updateCanvasSize(window.innerWidth, window.innerHeight)
	})

	// Blocks
	let StartBlock: EventBlock = new EventBlock({
		connections: 1,
		render(plotter: Plotter, block: Block) {
			let borderWidth: number = block.isFocused ? 3 : 1
			new Container({
				border: new Border(Colors.Black, borderWidth),
				borderRadius: 10,
				corner: block.corner,
				scale: block.scale,
				color: Colors.White,
				padding: Padding.all(10),
				render(plotter: Plotter, renderOptions: IContainerRenderOptions) {
					plotter.useBorder(new NoBorder())
					plotter.text("Start", {
						pos: renderOptions.offset,
						size: 20,
						boxScale: new Vector(renderOptions.offset.x, 20)
					})
				}
			}).render(plotter)
		},
		focused(block: Block) {},
		unfocused(block: Block) {}
	})

	// Add the blocks
	let block: Block = StartBlock.create(new Vector(100, 100), new Vector(100, 100))
	blockify.addBlock(block)

	// Run the render loop
	blockify.render()
}

new p5(main)