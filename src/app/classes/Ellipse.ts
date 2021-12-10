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
    // override draw(newDimensions: Array<number>){
    //     console.log(newDimensions);
    //     if(newDimensions[0]>5 && newDimensions[1]>5){
    //         this.dimensions = newDimensions;
    //     }else{
    //         console.log('else');
    //     }
    // }
    // resize(newCenter: Point, newDimensions: Array<number>): void {
    //     throw new Error('Method not implemented.');
    // }
    // copy(): IShape {
    //     throw new Error('Method not implemented.');
    // }
    delete(): void {
        throw new Error('Method not implemented.');
    }
    resize(location: string, offset: Point, mouse: Point): void {
        // this.normalizeDims();

        let directed = Geometry.getDirections(location, offset);
        
        if(this.dimensions[0] + directed.x > 10)  this.dimensions[0] += directed.x;
        if(this.dimensions[1] + directed.y > 10)  this.dimensions[1] += directed.y;
        // this.dimensions[1] += directed.y
    }
    
}