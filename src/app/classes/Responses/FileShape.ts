import { Shape } from "../Shape";

export class FileShape {
    shapes: Array<Shape>;
    customShapes: Array<Shape>;
    constructor(shapes: Array<Shape>, customShapes: Array<Shape>){
        this.shapes = shapes;
        this.customShapes = customShapes;
    }
}