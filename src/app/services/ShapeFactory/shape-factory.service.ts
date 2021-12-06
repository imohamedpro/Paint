import { Injectable } from '@angular/core';
import { Circle } from '../../classes/Circle';
import { IShape } from '../../interfaces/IShape';

@Injectable({
  providedIn: 'root'
})
export class ShapeFactoryService {

  constructor() { }
  createShape(type: string, id: number): IShape{
    return new Circle(id);
  }
}
