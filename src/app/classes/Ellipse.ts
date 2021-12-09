import { IShape } from '../interfaces/IShape';
import { Point } from './Point';
import {Shape} from './Shape'


export class Ellipse extends Shape {
    constructor(id: number, center: Point){
        super("ellipse", id, center);
    }

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
    
}