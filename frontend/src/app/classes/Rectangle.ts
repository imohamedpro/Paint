import { IShape } from '../interfaces/IShape';
import { Geometry } from './Geometry';
import { Point } from './Point';
import {Shape} from './Shape'


export class Rectangle extends Shape {
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
        return this.center.y + this.dimensions[1];
    }

    constructor(id: number, center: Point){
        super("rectangle", id, center);
    }
    delete(): void {
        throw new Error('Method not implemented.');
    }
    resize(location: string, offset: Point): void {
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