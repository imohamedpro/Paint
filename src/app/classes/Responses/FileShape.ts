// import { IShape } from "../../interfaces/IShape";
import { Shape } from "../Shape";
import { ShapeResponse } from "./ShapeResponse";
// import { ShapeResponse } from "./ShapeResponse";

export class FileShape {
    shapes: Array<ShapeResponse>;
    customShapes: Array<ShapeResponse>;
    constructor(shapes: Array<ShapeResponse>, customShapes: Array<ShapeResponse>){
        this.shapes = shapes;
        this.customShapes = customShapes;
    }
}