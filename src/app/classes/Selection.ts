import { Point } from './Point';
import {Shape} from './Shape';

export class SelectionFactory{

    static getSelection(type: string): Selection{
        let selection: Selection = new SelectionA();
        if(type == 'ellipse'){
            selection = new SelectionB();
        }else if(type == 'circle'){
            selection = new SelectionC();
        }
        console.log(type);

        return selection;
    }
}
export abstract class Selection {
    resizeNWx(center: Point, dimensions: Array<number>): number {
        // console.log(this.rectCenterX);
        return this.rectCenterX(center, dimensions);
    }
    resizeNWy(center: Point, dimensions: Array<number>): number {
        return this.rectCenterY(center, dimensions);
    }

    resizeNEx(center: Point, dimensions: Array<number>): number {
        return this.rectCenterX(center, dimensions) + this.rectDim1(dimensions);
    }
    resizeNEy(center: Point, dimensions: Array<number>): number {
        return this.rectCenterY(center, dimensions);
    }
    resizeSEx(center: Point, dimensions: Array<number>): number {
        return this.rectCenterX(center, dimensions) + this.rectDim1(dimensions);
    }
    resizeSEy(center: Point, dimensions: Array<number>): number {
        return this.rectCenterY(center, dimensions) + this.rectDim2(dimensions);
    }
    resizeSWx(center: Point, dimensions: Array<number>): number {
        return this.rectCenterX(center, dimensions);
    }
    resizeSWy(center: Point, dimensions: Array<number>): number {
        return this.rectCenterY(center, dimensions) + this.rectDim2(dimensions);
    }

    abstract rectCenterX(center: Point, dimensions: Array<number>): number;
    abstract rectCenterY(center: Point, dimensions: Array<number>): number;
    abstract rectDim1(dimensions: Array<number>): number;
    abstract rectDim2(dimensions: Array<number>): number;
}

export class SelectionA extends Selection {
    rectCenterX(center: Point, dimensions: Array<number>): number {
        // console.log(center.x);

        return center.x;
    }
    rectCenterY(center: Point, dimensions: Array<number>): number {
        return center.y;
    }
    rectDim1(dimensions: Array<number>): number {
        // console.log(dimensions[0]);
        return dimensions[0];
    }
    rectDim2(dimensions: Array<number>): number {
        return dimensions[1];
    }
    
}

export class SelectionB extends Selection{
    rectCenterX(center: Point, dimensions: Array<number>): number {
        return center.x - dimensions[0];
    }
    rectCenterY(center: Point, dimensions: Array<number>): number {
        return center.y - dimensions[1];
    }
    rectDim1(dimensions: Array<number>): number {
        return dimensions[0] * 2;
    }
    rectDim2(dimensions: Array<number>): number {
        return dimensions[1] * 2;
    }

}

export class SelectionC extends Selection{
    rectCenterX(center: Point, dimensions: Array<number>): number {
        return center.x - dimensions[0];
    }
    rectCenterY(center: Point, dimensions: Array<number>): number {
        return center.y - dimensions[0];
    }
    rectDim1(dimensions: Array<number>): number {
        return dimensions[0] * 2;
    }
    rectDim2(dimensions: Array<number>): number {
        return dimensions[0] * 2;
    }
}
