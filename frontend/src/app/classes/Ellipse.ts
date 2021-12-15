import { Geometry } from './Geometry';
import { Point } from './Point';
import {Shape} from './Shape'


export class Ellipse extends Shape {
    getMinX(): number {
        return this.center.x - this.dimensions[0];
    }
    getMinY(): number {
        return this.center.y - this.dimensions[1];
    }
    getMaxX(): number {
        return this.center.x + this.dimensions[0];
        ;
    }
    getMaxY(): number {
        return this.center.y + this.dimensions[1];
    }

    constructor(id: number, center: Point){
        super("ellipse", id, center);
    }
    resize(location: string, offset: Point): void {
        let directed = Geometry.getDirections(location, offset);
        if(this.dimensions[0] + directed.x > 10)  this.dimensions[0] += directed.x;
        if(this.dimensions[1] + directed.y > 10)  this.dimensions[1] += directed.y;
    }
    
}