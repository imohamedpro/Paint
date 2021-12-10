import { Ellipse } from './../../classes/Ellipse';
import { Rectangle } from './../../classes/Rectangle';
import { Injectable } from '@angular/core';
import { Line } from '../../classes/Line';
import { Triangle } from '../../classes/Triangle';
import { Square } from '../../classes/Square';
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
    let shape: Shape = new Square(id, center);
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

      case 'square':
        shape = new Square(id, center);
        break;  
      }
      

    return shape;
  }
}
