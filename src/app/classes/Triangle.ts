import { ViewChild } from "@angular/core";
import { IShape } from "../interfaces/IShape";
import { Point } from "./Point";
import { Shape } from "./Shape";

export class Triangle extends Shape{
    constructor(id: number, center: Point){
        super('triangle', id, center);
    }
    //draw(p: Point): void {
    //    throw new Error("Method not implemented.");
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
        this.dimensions[2] += offset.x;
        this.dimensions[3] += offset.y;
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
            case 'v3':
                this.dimensions[2] += offset.x;
                this.dimensions[3] += offset.y;
                break;
        }
    }
        
}