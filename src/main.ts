
// Imports
import { Blockify } from "./Blockify"

// Get the canvas and initialize Blockify
const canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("canvas#mainCanvas")
const blockify: Blockify = new Blockify(canvas, 600, 600)

// Run the render loop
blockify.render()