
// Imports
import { IBlock, Block } from "../Block";

// Interface for Event type blocks
export interface IEventBlock extends IBlock {}

// Event Block Class
export class EventBlock extends Block implements IEventBlock  {}