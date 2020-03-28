
// Imports
import { IBlock, Block } from "../Block";

// Interface for Normal type blocks
export interface INormalBlock extends IBlock {}

// Normal Block Class
export class NormalBlock extends Block implements INormalBlock {}