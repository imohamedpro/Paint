import { Injectable } from '@angular/core';
import { Point } from '../../classes/Point';
import { Shape } from '../../classes/Shape';
import { Color, Style } from '../../classes/Style';
import { IShape } from '../../interfaces/IShape';
import { ShapeFactoryService } from '../ShapeFactory/shape-factory.service';

// Shape manager user the shape factory

@Injectable({
  providedIn: 'root'
})
export class ShapeManagerService {
  shapes: Map<number, Shape>;
  selectedShapes: Map<number, Shape>;
  availableIds: Array<number>;
  // if a shape is deleted, later ones are shifted.
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
  createShape(type: string, center:Point, fill: Color, stroke: Color, strokeWidth: number): number{
    let id = this.getAvailableId();
    let shape = this.factory.createShape(type, id, center);
    shape.style = new Style();
    // shape.move(center);
    shape.setFill(fill);
    shape.setStroke(stroke);
    shape.setStrokeWidth(strokeWidth);
    shape.setCursor("default");
    shape.resize(center, [5,5,5,5]);
    this.shapes.set(id, shape);
    // console.log(shape.fill.toString());
    return id;
  }

  select(shape: Shape){
    shape.isSelected = true;
    this.selectedShapes.set(shape.id, shape);
    shape.setCursor("move"); 
  }
  deselect(shape: Shape){
    shape.isSelected = false;
    this.selectedShapes.delete(shape.id);
    shape.setCursor("default"); 
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
    this.clipBoard = new Map<number, Shape>();
    this.selectedShapes.forEach((shape)=>{
      clone = shape.copy();
      console.log("original" + shape);
      console.log("clone" + clone);
      this.clipBoard.set(clone.getId(),clone);
    });
  }
  paste(): void{
    let shifting:Point = new Point(5,5);
    this.clipBoard.forEach((shape)=> {
      let clone = shape.copy();
      clone.move(shifting);
      clone.id = this.getAvailableId();
      this.select(clone);
      this.shapes.set(clone.id,clone);
    });
  }

  draw(id: number, dim: number[]): void{
    this.shapes.get(id)?.draw(dim);
  }

  drawNegative(id:number, offset:number[]){
    this.shapes.get(id)?.setCenter(new Point(offset[0], offset[1]));
  }
}
