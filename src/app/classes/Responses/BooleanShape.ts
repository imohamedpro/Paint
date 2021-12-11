import { Shape } from "../Shape";

export class BooleanShape {
    shape: Shape;
    isDeleted: boolean;
    isCreated: boolean;
    isChange: boolean;
    constructor(shape: Shape, deleted: boolean, created: boolean, changed: boolean){
        this.shape = shape;
        this.isDeleted = deleted;
        this.isCreated = created;
        this.isChange = changed;
    }
}