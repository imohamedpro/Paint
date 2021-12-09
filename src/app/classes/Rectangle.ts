import { IShape } from '../interfaces/IShape';
import { Point } from './Point';
import {Shape} from './Shape'


export class Rectangle extends Shape {
    constructor(id: number, center: Point){
        super("rectangle", id, center);
    }

    // override draw(newDimensions: Array<number>): void{
    //     console.log(newDimensions);
    //     if(newDimensions[0] > 5 && newDimensions[1] > 5){
    //         this.dimensions = newDimensions;
    //     }
    // }
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
    
}