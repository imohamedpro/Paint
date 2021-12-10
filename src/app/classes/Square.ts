import { IShape } from "../interfaces/IShape";
import { Geometry } from "./Geometry";
import { Point } from "./Point";
import { Shape } from "./Shape";

export class Square extends Shape {

    constructor(id: number, center: Point){
        super("square", id, center);
    }

    // draw(p: Point): void {
    //     throw new Error('Method not implemented.');
    // }
    // // resize(newCenter: Point, newDimensions: Array<number>): void {
    // //     throw new Error('Method not implemented.');
    // // }
    // copy(): IShape {
    //     throw new Error('Method not implemented.');
    // }
    delete(): void {
        throw new Error('Method not implemented.');
    }

    resize(location: string, offset: Point, mouse: Point): void {
        let directed = Geometry.getDirections(location, offset);
        switch(location){
            case 'N':
            case 'NW':
            case 'W':
                if(this.dimensions[0] + directed.x > 10)
                this.center.x -= directed.x;
                if(this.dimensions[1] + directed.y > 10)
                this.center.y -= directed.y;
                break;
            case 'NE':
                if(this.dimensions[1] + directed.y > 10)
                this.center.y -= directed.y;
                break;
            case 'SW':
                if(this.dimensions[0] + directed.x > 10)
                this.center.x -= directed.x;
        }
        if(this.dimensions[0] + directed.x > 10)  this.dimensions[0] += directed.x;
        if(this.dimensions[1] + directed.y > 10)  this.dimensions[1] += directed.y;
    }


}


