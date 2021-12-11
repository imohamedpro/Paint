import { Point } from "./Point";
import { Shape } from "./Shape"

export class Line extends Shape{
    getMinX(): number {
        return Math.min(this.center.x, this.dimensions[0]);
    }
    getMinY(): number {
        return Math.min(this.center.y, this.dimensions[1]);
    }
    getMaxX(): number {
        return Math.max(this.center.x, this.dimensions[0]);

    }
    getMaxY(): number {
        return Math.max(this.center.y, this.dimensions[1]);
    }
    constructor(id: number,center: Point){
        super('line', id, center);
    }

    override move(offset: Point): void{
        this.center.shift(offset);
        this.dimensions[0] += offset.x;
        this.dimensions[1] += offset.y;
    }

    resize(location: string, offset: Point){
        switch(location){
            case 'v1':
                this.center.shift(offset);
                break;
            case 'v2':
                this.dimensions[0] += offset.x;
                this.dimensions[1] += offset.y;
                break;
        }
    }
    
}
