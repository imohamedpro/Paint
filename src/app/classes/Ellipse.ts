import { IShape } from '../interfaces/IShape';
import { Geometry } from './Geometry';
import { Point } from './Point';
import {Shape} from './Shape'


export class Ellipse extends Shape {

    constructor(id: number, center: Point){
        super("ellipse", id, center);
    }

    // draw(p: Point): void {
    //     throw new Error('Method not implemented.');
    // }
    // resize(newCenter: Point, newDimensions: Array<number>): void {
    //     throw new Error('Method not implemented.');
    // }
    copy(): IShape {
        throw new Error('Method not implemented.');
    }
    delete(): void {
        throw new Error('Method not implemented.');
    }
    resize(location: string, offset: Point, mouse: Point): void {

        let directed = Geometry.getDirections(location, offset);
        this.dimensions[0] += directed.x;
        this.dimensions[1] += directed.y
        this.dimensions[0] = Math.abs(this.dimensions[0]);
        this.dimensions[1] = Math.abs(this.dimensions[1]);
    }
    
}