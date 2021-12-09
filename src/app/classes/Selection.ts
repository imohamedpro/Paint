import { Point } from './Point';
import {Shape} from './Shape';

export class SelectionFactory{

    static getSelection(type: string): Selection{
        let selection: Selection = new SelectionA();
        switch(type){
            case 'circle':
            case 'ellipse':
                selection = new SelectionB();
                break;
            case 'line':
            case 'triangle':
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
        return this.rectCenterX(center, dimensions) + this.rectDim1(center, dimensions);
    }
    resizeNEy(center: Point, dimensions: Array<number>): number {
        return this.rectCenterY(center, dimensions);
    }
    resizeSEx(center: Point, dimensions: Array<number>): number {
        return this.rectCenterX(center, dimensions) + this.rectDim1(center, dimensions);
    }
    resizeSEy(center: Point, dimensions: Array<number>): number {
        return this.rectCenterY(center, dimensions) + this.rectDim2(center, dimensions);
    }
    resizeSWx(center: Point, dimensions: Array<number>): number {
        return this.rectCenterX(center, dimensions);
    }
    resizeSWy(center: Point, dimensions: Array<number>): number {
        return this.rectCenterY(center, dimensions) + this.rectDim2(center, dimensions);
    }

    abstract rectCenterX(center: Point, dimensions: Array<number>): number;
    abstract rectCenterY(center: Point, dimensions: Array<number>): number;
    abstract rectDim1(center: Point, dimensions: Array<number>): number;
    abstract rectDim2(center: Point, dimensions: Array<number>): number;
}

export class SelectionA extends Selection {
    rectCenterX(center: Point, dimensions: Array<number>): number {
        // console.log(center.x);

        return center.x;
    }
    rectCenterY(center: Point, dimensions: Array<number>): number {
        return center.y;
    }
    rectDim1(center: Point, dimensions: Array<number>): number {
        // console.log(dimensions[0]);
        return dimensions[0];
    }
    rectDim2(center: Point, dimensions: Array<number>): number {
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
    rectDim1(center: Point, dimensions: Array<number>): number {
        return dimensions[0] * 2;
    }
    rectDim2(center: Point, dimensions: Array<number>): number {
        return dimensions[1] * 2;
    }

}

export class SelectionC extends Selection{
    rectCenterX(center: Point, dimensions: number[]): number {
        return Math.min(center.x, this.getMin(dimensions, true));
    }
    rectCenterY(center: Point, dimensions: number[]): number {
        return Math.min(center.y, this.getMin(dimensions, false));
    }
    rectDim1(center: Point, dimensions: number[]): number {
        let min = this.rectCenterX(center, dimensions);
        return Math.max(center.x, this.getMin(dimensions, true)) - min;

    }
    rectDim2(center: Point, dimensions: number[]): number {
        let min = this.rectCenterY(center, dimensions);
        return Math.max(center.y, this.getMin(dimensions, false)) - min;
    }

    private getMin(arr: Array<number>, even: boolean): number{
        let i = even? 0: 1;
        let min = arr[i];
        for(i; i < arr.length; i +=2){
            if(min > arr[i])    min = arr[i];
        }
        return min;
    }
    
}

