import { IShape } from '../interfaces/IShape';
import { Geometry } from './Geometry';
import { Point } from './Point';
import {Shape} from './Shape'


export class Rectangle extends Shape {

    constructor(id: number, center: Point){
        super("rectangle", id, center);
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
        // console.log(Math.min(this.center.x, mouse.x));
        // console.log(Math.min(this.center.y, mouse.y));
        // this.center.x = Math.min(this.center.x, mouse.x);
        // this.center.y = Math.min(this.center.y, mouse.y);

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
        // this.dimensions[0] += directed.x;
        // this.dimensions[1] += directed.y;
        // this.normalizeDims();
    }
    
}