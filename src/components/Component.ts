
import p5 from 'p5'
import { Plotter } from "../utils/Plotter";

export interface Component {
	attachSketch(sketch: p5, plotter: Plotter): void
	render(): void
	mouseClicked(): void
}