import { Shape } from "../Shape";


export class BooleanShape {
    shape: Shape;
    delete: boolean;
    create: boolean;
    change: boolean;
    constructor(shape: Shape, deleted: boolean, created: boolean, changed: boolean){
        this.shape = shape;
        this.delete = deleted;
        this.create = created;
        this.change = changed;
    }
}