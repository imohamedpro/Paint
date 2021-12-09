import { Ellipse } from './../../classes/Ellipse';
import { Rectangle } from './../../classes/Rectangle';
import { Injectable } from '@angular/core';
import { Line } from 'src/app/classes/Line';
import { Triangle } from 'src/app/classes/Triangle';
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
      case 'rectangle':
        shape = new Rectangle(id, center);
        break;
      case 'ellipse':
        shape = new Ellipse(id, center);
        break;
      case 'line':
        shape = new Line(id,center);
        break;
      case 'triangle':
        shape = new Triangle(id, center);
        break;

    }

    return shape;
  }
}
