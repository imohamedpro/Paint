import { IShape } from "../interfaces/IShape";
import { Geometry } from "./Geometry";
import { Point } from "./Point";
import { Shape } from "./Shape";

export class Square extends Shape {
    getMinX(): number {
        return this.center.x;
    }
    getMinY(): number {
        return this.center.y;
    }
    getMaxX(): number {
        return this.center.x + this.dimensions[0];

    }
    getMaxY(): number {
        return this.center.y + this.dimensions[0];
    }

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

    resize(location: string, offset: Point): void {

        let directed = Geometry.getDirections(location, offset);
        let off = directed.y;

        if(Math.abs(offset.x) > Math.abs(offset.y)){
            off = directed.x;
        }
        switch(location){
            case 'NW':
                if(this.dimensions[0] + off > 15){
                    this.center.x -= off;
                    // if(this.dimensions[1] + directed.y > 10)
                    this.center.y -= off;
                }

                break;
            case 'NE':
                if(this.dimensions[1] + off > 15)
                this.center.y -= off;
                break;
            case 'SW':
                if(this.dimensions[0] + off > 15)
                this.center.x -= off;
        }
        if(this.dimensions[0] + off > 15){
            this.dimensions[0] += off;
            this.dimensions[1] = this.dimensions[0];
        }  
        // if(this.dimensions[1] + directed.y > 10)  this.dimensions[1] = off;
    }


}


