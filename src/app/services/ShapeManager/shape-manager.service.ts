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
  clipBoard!: Map<number, Shape>;

  constructor(factory: ShapeFactoryService) { 
    this.shapes = new Map<number, Shape>();
    this.selectedShapes = new Map<number, Shape>();
    this.availableIds = new Array<number>();
    this.clipBoard = new Map<number, Shape>();
    this.factory = factory;
  }
  getAvailableId(): number{
    return this.availableIds.length > 0? Number(this.availableIds.shift()): this.shapes.size;
  }
  createShape(type: string, center:Point, fill: Color, stroke: Color, strokeWidth: number){
    let id = this.getAvailableId();
    let shape = this.factory.createShape(type, id, center);
    shape.style = new Style();
    // shape.move(center);
    shape.setFill(fill);
    shape.setStroke(stroke);
    shape.setStrokeWidth(strokeWidth);
    shape.resize(center, [50,100,150,190]);
    this.shapes.set(id, shape);
    // console.log(shape.fill.toString());

  }

  select(shape: Shape){
    shape.isSelected = true;
    this.selectedShapes.set(shape.id, shape); 
  }
  deselect(shape: Shape){
    shape.isSelected = false;
    this.selectedShapes.delete(shape.id);
  }
  clearSelected(){
    this.selectedShapes.forEach((shape) => {
      this.deselect(shape);
    });
    // this.selectedShapes = new Map<number, Shape>();
  }

  move(offset: Point){
    this.selectedShapes.forEach((shape) => {
      shape.move(offset);
    });
  }
  delete(): void{
    this.selectedShapes.forEach((shape) =>{
      this.availableIds.push(shape.id);
      this.deselect(shape);
      this.shapes.delete(shape.id);
    });
  }
  ctrlC(): void{
    let clone!: Shape;
    this.selectedShapes.forEach((shape)=>{
      clone = shape.copy();
      this.clipBoard.set(clone.getId(),clone);
    });
  }
  paste(): void{
    let shifting:Point = new Point(5,5);
    this.clipBoard.forEach((shape)=> {
      shape.move(shifting);
      this.shapes.set(this.getAvailableId(),shape);
    });
  }
}
