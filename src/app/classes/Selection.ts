import { Point } from './Point';
import {Shape} from './Shape';

export abstract class Selection {
    center: Point;
    dimensions: Array<number>;

    abstract resizeNW(): number;
    abstract resizeNE(): number;
    abstract resizeSE(): number;
    abstract resizeSW(): number;

    abstract rectCenter(center: Point, dimensions: Array<number>): number;
    abstract rectDim1(center: Point, dimensions: Array<number>): number;
    abstract rectDim2(center: Point, dimensions: Array<number>): number;
}

export class SelectionA extends Selection {
    resizeNW(): number {
        throw new Error('Method not implemented.');
    }
    resizeNE(): number {
        throw new Error('Method not implemented.');
    }
    resizeSE(): number {
        throw new Error('Method not implemented.');
    }
    resizeSW(): number {
        throw new Error('Method not implemented.');
    }
    rectCenter(center: Point, dimensions: number[]): number {
        return ;
    }
    rectDim1(center: Point, dimensions: number[]): number {
        throw new Error('Method not implemented.');
    }
    rectDim2(center: Point, dimensions: number[]): number {
        throw new Error('Method not implemented.');
    }
}