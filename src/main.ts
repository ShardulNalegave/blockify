
import { Blockify } from "./Blockify"

const canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("canvas#mainCanvas")
const blockify: Blockify = new Blockify(canvas, 600, 600)
blockify.render()