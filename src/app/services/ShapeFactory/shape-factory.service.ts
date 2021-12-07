import { Rectangle } from './../../classes/Rectangle';
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
    switch(type){
      case 'circle':
        return new Circle(id);
      case 'rectangle':
        return new Rectangle(id);
    }
    return new Circle(id);
  }
}
