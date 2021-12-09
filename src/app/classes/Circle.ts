import { IDimension } from '../interfaces/IDimension';
import { IShape } from '../interfaces/IShape';
import { CircleDimensions } from './CircleDimensions';
import { Point } from './Point';
import {Shape} from './Shape'


export class Circle extends Shape {
    constructor(id: number, center: Point){
        super("circle", id, center);
    }

    // override draw(newDimensions: Array<number>): void {
    //     console.log(newDimensions);
    //     if(newDimensions[0] >= 5){
    //         this.dimensions = newDimensions;
    //     }else{
    //         console.log(this.dimensions);
    //         console.log("Dimension is less than 5");
    //     }
    // }
    // resize(newCenter: Point, newDimensions: Array<number>): void {
    //     throw new Error('Method not implemented.');
    // }
    //copy(): IShape {
      //  throw new Error('Method not implemented.');
    //}
    delete(): void {
        throw new Error('Method not implemented.');
    }

}