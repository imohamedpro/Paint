import { Injectable } from '@angular/core';
import { Line } from 'src/app/classes/Line';
import { Circle } from '../../classes/Circle';
import { Shape } from '../../classes/Shape';
import { IShape } from '../../interfaces/IShape';

@Injectable({
  providedIn: 'root'
})
export class ShapeFactoryService {

  constructor() { }
  createShape(type: string, id: number): Shape{
    let shape: Shape = new Line(id);
    switch (type){


      case 'circle':
        shape =  new Circle(id);
        break;
      case 'line':
        shape = new Line(id);
        break;

    }

    return shape;
  }
}
