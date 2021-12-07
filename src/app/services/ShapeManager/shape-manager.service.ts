import { Injectable } from '@angular/core';
import { Point } from '../../classes/Point';
import { Shape } from '../../classes/Shape';
import { Color, Style } from '../../classes/Style';
import { IShape } from '../../interfaces/IShape';
import { ShapeFactoryService } from '../ShapeFactory/shape-factory.service';

@Injectable({
  providedIn: 'root'
})
export class ShapeManagerService {
  shapes: Map<number, Shape>;
  selectedShapes: Map<number, Shape>;
  availableIds: Array<number>;
  factory: ShapeFactoryService;

  constructor(factory: ShapeFactoryService) { 
    this.shapes = new Map<number, Shape>();
    this.selectedShapes = new Map<number, Shape>();
    this.availableIds = new Array<number>();
    this.factory = factory;
  }
  getAvailableId(): number{
    return this.availableIds.length > 0? Number(this.availableIds.shift()): this.shapes.size;
  }
  createShape(type: string, center:Point, fill: Color, stroke: Color, strokeWidth: number){
    let id = this.getAvailableId();
    let shape = this.factory.createShape(type, id);
    shape.style = new Style();
    shape.move(center);
    shape.setFill(fill);
    shape.setStroke(stroke);
    shape.setStrokeWidth(strokeWidth);
    shape.resize(center, [60]);
    this.shapes.set(id, shape);
    // console.log(shape.fill.toString());

  }
}
