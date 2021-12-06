import { Injectable } from '@angular/core';
import { Color } from '../../classes/Color';
import { Point } from '../../classes/Point';
import { IShape } from '../../interfaces/IShape';
import { ShapeFactoryService } from '../ShapeFactory/shape-factory.service';

@Injectable({
  providedIn: 'root'
})
export class ShapeManagerService {
  shapes: Map<number, IShape>;
  selectedShapes: Map<number, IShape>;
  availableIds: Array<number>;
  factory: ShapeFactoryService;

  constructor(factory: ShapeFactoryService) { 
    this.shapes = new Map<number, IShape>();
    this.selectedShapes = new Map<number, IShape>();
    this.availableIds = new Array<number>();
    this.factory = factory;
  }
  getAvailableId(): number{
    return this.availableIds.length > 0? Number(this.availableIds.shift()): this.shapes.size;
  }
  createShape(type: string, center:Point, fill: Color, stroke: Color){
    let id = this.getAvailableId();
    let shape = this.factory.createShape(type, id);
    shape.move(center);
    shape.setFill(fill);
    shape.setStroke(stroke)
    this.shapes.set(id, shape);
  }
}
