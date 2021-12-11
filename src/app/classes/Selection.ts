import { Point } from './Point';

export class SelectionFactory{

    static getSelection(type: string): Selection{
        let selection: Selection = new SelectionA();
        switch(type){
            case 'circle':
            case 'ellipse':
                selection = new SelectionB();
                break;
        }
        console.log(type);

        return selection;
    }
}
export interface Selection {
    resizeNWx(center: Point, dimensions: Array<number>): number
    resizeNWy(center: Point, dimensions: Array<number>): number
    resizeNEx(center: Point, dimensions: Array<number>): number
    resizeNEy(center: Point, dimensions: Array<number>): number
    resizeSEx(center: Point, dimensions: Array<number>): number
    resizeSEy(center: Point, dimensions: Array<number>): number
    resizeSWx(center: Point, dimensions: Array<number>): number
    resizeSWy(center: Point, dimensions: Array<number>): number
    resizeNx(center: Point, dimensions: Array<number>): number 
    resizeNy(center: Point, dimensions: Array<number>): number 
    resizeEx(center: Point, dimensions: Array<number>): number 
    resizeEy(center: Point, dimensions: Array<number>): number 
    resizeSx(center: Point, dimensions: Array<number>): number 
    resizeSy(center: Point, dimensions: Array<number>): number 
    resizeWx(center: Point, dimensions: Array<number>): number 
    resizeWy(center: Point, dimensions: Array<number>): number 
}

export class SelectionA implements Selection {
    resizeNWx(center: Point, dimensions: Array<number>): number {
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
}

export class SelectionB implements Selection{
    resizeNx(center: Point, dimensions: Array<number>): number{
        return center.x;
    }
    resizeNy(center: Point, dimensions: Array<number>): number{
        return center.y - dimensions[1];
    }
    resizeEx(center: Point, dimensions: Array<number>): number{
        return center.x + dimensions[0];
    }
    resizeEy(center: Point, dimensions: Array<number>): number{
        return center.y;
    }
    resizeSx(center: Point, dimensions: Array<number>): number{
        return center.x;
    }
    resizeSy(center: Point, dimensions: Array<number>): number{
        return center.y + dimensions[1];
    }
    resizeWx(center: Point, dimensions: Array<number>): number{
        return center.x - dimensions[0];
    }
    resizeWy(center: Point, dimensions: Array<number>): number{
        return center.y;
    }


    resizeNWx(center: Point, dimensions: Array<number>): number{
        return center.x - dimensions[0];
    }
    resizeNWy(center: Point, dimensions: Array<number>): number{
        return center.y - dimensions[1];
    }
    resizeNEx(center: Point, dimensions: Array<number>): number{
        return center.x + dimensions[0];
    }
    resizeNEy(center: Point, dimensions: Array<number>): number{
        return center.y - dimensions[1];
    }
    resizeSEx(center: Point, dimensions: Array<number>): number{
        return center.x + dimensions[0];
    }
    resizeSEy(center: Point, dimensions: Array<number>): number{
        return center.y + dimensions[1];
    }
    resizeSWx(center: Point, dimensions: Array<number>): number{
        return center.x - dimensions[0];
    }
    resizeSWy(center: Point, dimensions: Array<number>): number{
        return center.y + dimensions[1];
    }

}

// export class SelectionC extends Selection{
//     rectCenterX(center: Point, dimensions: number[]): number {
//         return Math.min(center.x, this.getMin(dimensions, true));
//     }
//     rectCenterY(center: Point, dimensions: number[]): number {
//         return Math.min(center.y, this.getMin(dimensions, false));
//     }
//     rectDim1(center: Point, dimensions: number[]): number {
//         let min = this.rectCenterX(center, dimensions);
//         return Math.max(center.x, this.getMin(dimensions, true)) - min;

//     }
//     rectDim2(center: Point, dimensions: number[]): number {
//         let min = this.rectCenterY(center, dimensions);
//         return Math.max(center.y, this.getMin(dimensions, false)) - min;
//     }

//     private getMin(arr: Array<number>, even: boolean): number{
//         let i = even? 0: 1;
//         let min = arr[i];
//         for(i; i < arr.length; i +=2){
//             if(min > arr[i])    min = arr[i];
//         }
//         return min;
//     }
    
// }

