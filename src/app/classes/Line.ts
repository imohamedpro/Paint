import { IShape } from "../interfaces/IShape";
import { Point } from "./Point";
import { Shape } from "./Shape"

export class Line extends Shape{
    constructor(id: number){
        super('line', id);
    }

    draw(p: Point): void {
        throw new Error("Method not implemented.");
    }
    copy(): IShape {
        throw new Error("Method not implemented.");
    }
    delete(): void {
        throw new Error("Method not implemented.");
    }
    
}
