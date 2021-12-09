import { Geometry } from './Geometry';
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
        return center.x;
    }
    resizeNWy(center: Point, dimensions: Array<number>): number {
        return center.y;
    }

    resizeNEx(center: Point, dimensions: Array<number>): number {
        return center.x + dimensions[0];
    }
    resizeNEy(center: Point, dimensions: Array<number>): number {
        return center.y;
    }
    resizeSEx(center: Point, dimensions: Array<number>): number {
        return center.x + dimensions[0];
    }
    resizeSEy(center: Point, dimensions: Array<number>): number {
        return center.y + dimensions[1];
    }
    resizeSWx(center: Point, dimensions: Array<number>): number {
        return center.x;
    }
    resizeSWy(center: Point, dimensions: Array<number>): number {
        return center.y + dimensions[1];
    }





    resizeNx(center: Point, dimensions: Array<number>): number {
        // console.log(this.rectCenterX);
        return center.x + dimensions[0] / 2;
    }
    resizeNy(center: Point, dimensions: Array<number>): number {
        return center.y;
    }

    resizeEx(center: Point, dimensions: Array<number>): number {
        return center.x + dimensions[0];
    }
    resizeEy(center: Point, dimensions: Array<number>): number {
        return center.y + dimensions[1] / 2;
    }
    resizeSx(center: Point, dimensions: Array<number>): number {
        return center.x + dimensions[0] / 2;
    }
    resizeSy(center: Point, dimensions: Array<number>): number {
        return center.y + dimensions[1];
    }
    resizeWx(center: Point, dimensions: Array<number>): number {
        return center.x;
    }
    resizeWy(center: Point, dimensions: Array<number>): number {
        return center.y + dimensions[1] / 2;
    }

    // abstract rectCenterX(center: Point, dimensions: Array<number>): number;
    // abstract rectCenterY(center: Point, dimensions: Array<number>): number;
    // abstract rectDim1(center: Point, dimensions: Array<number>): number;
    // abstract rectDim2(center: Point, dimensions: Array<number>): number;
}

export class SelectionA extends Selection {
    // rectCenterX(center: Point, dimensions: Array<number>): number {
    //     // console.log(center.x);

    //     return center.x;
    // }
    // rectCenterY(center: Point, dimensions: Array<number>): number {
    //     return center.y;
    // }
    // rectDim1(center: Point, dimensions: Array<number>): number {
    //     // console.log(dimensions[0]);
    //     return dimensions[0];
    // }
    // rectDim2(center: Point, dimensions: Array<number>): number {
    //     return dimensions[1];
    // }
    
}

export class SelectionB extends Selection{
    // rectCenterX(center: Point, dimensions: Array<number>): number {
    //     return center.x - dimensions[0];
    // }
    // rectCenterY(center: Point, dimensions: Array<number>): number {
    //     return center.y - dimensions[1];
    // }
    // rectDim1(center: Point, dimensions: Array<number>): number {
    //     return dimensions[0] * 2;
    // }
    // rectDim2(center: Point, dimensions: Array<number>): number {
    //     return dimensions[1] * 2;
    // }
    override resizeNx(center: Point, dimensions: Array<number>): number{
        return center.x;
    }
    override resizeNy(center: Point, dimensions: Array<number>): number{
        return center.y - dimensions[1];
    }
    override  resizeEx(center: Point, dimensions: Array<number>): number{
        return center.x + dimensions[0];
    }
    override resizeEy(center: Point, dimensions: Array<number>): number{
        return center.y;
    }
    override resizeSx(center: Point, dimensions: Array<number>): number{
        return center.x;
    }
    override resizeSy(center: Point, dimensions: Array<number>): number{
        return center.y + dimensions[1];
    }
    override resizeWx(center: Point, dimensions: Array<number>): number{
        return center.x - dimensions[0];
    }
    override resizeWy(center: Point, dimensions: Array<number>): number{
        return center.y;
    }


    override resizeNWx(center: Point, dimensions: Array<number>): number{
        return center.x - dimensions[0];
    }
    override resizeNWy(center: Point, dimensions: Array<number>): number{
        return center.y - dimensions[1];
    }
    override resizeNEx(center: Point, dimensions: Array<number>): number{
        return center.x + dimensions[0];
    }
    override resizeNEy(center: Point, dimensions: Array<number>): number{
        return center.y - dimensions[1];
    }
    override resizeSEx(center: Point, dimensions: Array<number>): number{
        return center.x + dimensions[0];
    }
    override resizeSEy(center: Point, dimensions: Array<number>): number{
        return center.y + dimensions[1];
    }
    override resizeSWx(center: Point, dimensions: Array<number>): number{
        return center.x - dimensions[0];
    }
    override resizeSWy(center: Point, dimensions: Array<number>): number{
        return center.y + dimensions[1];
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

