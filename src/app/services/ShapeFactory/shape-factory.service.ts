import { Injectable } from '@angular/core';
import { Circle } from '../../classes/Circle';
import { Shape } from '../../classes/Shape';
import { IShape } from '../../interfaces/IShape';

@Injectable({
  providedIn: 'root'
})
export class ShapeFactoryService {

  constructor() { }
  createShape(type: string, id: number): Shape{
    let shape: Shape = new Circle(id);
    switch (type){


      case 'circle':
        shape =  new Circle(id);
        break;

    }

    return shape;
  }
}
