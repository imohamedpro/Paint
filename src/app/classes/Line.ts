import { IShape } from "../interfaces/IShape";
import { Point } from "./Point";
import { Shape } from "./Shape"

export class Line extends Shape{
    constructor(id: number,center: Point){
        super('line', id, center);
    }

    //draw(p: Point): void {
     //   throw new Error("Method not implemented.");
    //}
    //copy(): IShape {
      //  throw new Error("Method not implemented.");
    //}
    //delete(): void {
    //    throw new Error("Method not implemented.");
    //}

    override move(offset: Point): void{
        this.center.shift(offset);
        this.dimensions[0] += offset.x;
        this.dimensions[1] += offset.y;
    }

    resize(location: string, offset: Point, mouse: Point){
        switch(location){
            case 'v1':
                this.center.shift(offset);
                break;
            case 'v2':
                this.dimensions[0] += offset.x;
                this.dimensions[1] += offset.y;
                break;
        }
    }
    
}
