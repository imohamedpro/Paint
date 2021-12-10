import { IDimension } from '../interfaces/IDimension';
import { IShape } from '../interfaces/IShape';
import { CircleDimensions } from './CircleDimensions';
import { Geometry } from './Geometry';
import { Point } from './Point';
import {Shape} from './Shape'


export class Circle extends Shape {
    getMinX(): number {
        return this.center.x - this.dimensions[0];
    }
    getMinY(): number {
        return this.center.y - this.dimensions[0];
    }
    getMaxX(): number {
        return this.center.x + this.dimensions[0];
        ;
    }
    getMaxY(): number {
        return this.center.y + this.dimensions[0];
    }

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
    resize(location: string, offset: Point): void {
        let direction = (location == 'N' || location == 'W')? -1: 1;
        let off = offset.y;
        if(Math.abs(offset.x) > Math.abs(offset.y)){
            off =  offset.x;
        }
        if(this.dimensions[0] + direction * off > 10){
            this.dimensions[0] += direction * off;
            this.dimensions[1] = this.dimensions[0];
        }


        // this.normalizeDims();
    }
}