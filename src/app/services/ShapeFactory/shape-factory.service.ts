import { Injectable } from '@angular/core';
import { Square } from 'src/app/classes/Square';
import { SquareComponent } from 'src/app/components/square/square.component';
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

      case 'square':
        shape = new Square(id, center);
        break;  
      }
      

    return shape;
  }
}
