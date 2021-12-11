// import { IShape } from "../../interfaces/IShape";
import { Shape } from "../Shape";
// import { ShapeResponse } from "./ShapeResponse";

export class FileShape {
    shapes: Array<Shape>;
    customShapes: Array<Shape>;
    constructor(shapes: Array<Shape>, customShapes: Array<Shape>){
        this.shapes = shapes;
        this.customShapes = customShapes;
    }
}