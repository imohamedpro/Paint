import { Geometry } from "./Geometry";
import { Point } from "./Point";
import { Shape } from "./Shape";

export class UserDefined extends Shape {
    // initilaDims: Array<number>;
    getMinX(): number {
        return this.center.x;
    }
    getMinY(): number {
        return this.center.y;
    }
    getMaxX(): number {
        return this.dimensions[0];
    }
    getMaxY(): number {
        return this.dimensions[1];
    }
    // shapes!: Shape[];
    constructor(id: number, center:Point){
        console.log("D:");
        super('userDefined', id, center);
        // let minX = shapes[0].getMinX(), minY = shapes[0].getMinY(),
        //      maxX = shapes[0].getMaxX(), maxY = shapes[0].getMaxY();
        // this.shapes.push(shapes[0].copy());
        // for(let i = 1; i < shapes.length; i++){
        //     this.shapes.push(shapes[i].copy());
        //     minX = Math.min(minX, shapes[i].getMinX());
        //     minY = Math.min(minX, shapes[i].getMinX());
        //     maxX = Math.max(minX, shapes[i].getMaxX());
        //     maxY = Math.max(minX, shapes[i].getMaxX());
        // }
        // this.dimensions[0] = maxX - minX;
        // this.dimensions[1] = maxY - minY;
        // this.initialDims = new Array<number>();
        // this.initialDims[0] = this.dimensions[0];
        // this.initialDims[1] = this.dimensions[1];
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