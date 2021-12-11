import { Shape } from "../Shape";
import { ShapeResponse } from "./ShapeResponse";


export class BooleanShape {
    shape: ShapeResponse;
    delete: boolean;
    create: boolean;
    change: boolean;
    constructor(shape: ShapeResponse, deleted: boolean, created: boolean, changed: boolean){
        this.shape = shape;
        this.delete = deleted;
        this.create = created;
        this.change = changed;
    }
}