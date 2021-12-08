import { Injectable } from '@angular/core';
import { Circle } from '../../classes/Circle';
import { Point } from '../../classes/Point';
import { Shape } from '../../classes/Shape';
import { IShape } from '../../interfaces/IShape';

@Injectable({
  providedIn: 'root'
})
export class ShapeFactoryService {

  constructor() { }
  createShape(type: string, id: number, center: Point): Shape{
    let shape: Shape = new Circle(id, center);
    switch (type){


      case 'circle':
        shape =  new Circle(id, center);
        break;

    }

    return shape;
  }
}
