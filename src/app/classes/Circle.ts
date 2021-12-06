import { IDimension } from '../interfaces/IDimension';
import { IShape } from '../interfaces/IShape';
import { Point } from './Point';
import {Shape} from './Shape'


export class Circle extends Shape {
    constructor(id: number){
        super("circle", id);
    }

    draw(p: Point): void {
        throw new Error('Method not implemented.');
    }
    resize(newD: IDimension): void {
        throw new Error('Method not implemented.');
    }
    copy(): IShape {
        throw new Error('Method not implemented.');
    }
    delete(): void {
        throw new Error('Method not implemented.');
    }

}