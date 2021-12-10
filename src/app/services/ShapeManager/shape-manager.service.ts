import { FillColor } from './../../classes/Style';
import { Injectable } from '@angular/core';
import { Point } from '../../classes/Point';
import { Shape } from '../../classes/Shape';
import { Color, Style } from '../../classes/Style';
import { IShape } from '../../interfaces/IShape';
import { ShapeFactoryService } from '../ShapeFactory/shape-factory.service';
import { UserDefined } from '../../classes/UserDefined';

// Shape manager user the shape factory

@Injectable({
  providedIn: 'root'
})
export class ShapeManagerService {
  shapes: Map<number, Shape>;
  selectedShapes: Map<number, Shape>;
  availableIds: Array<number>;
  customShapes: Map<number, Shape[]>;
  // if a shape is deleted, later ones are shifted.
  factory: ShapeFactoryService;
  clipBoard!: Map<number, Shape>;
  isDragging: boolean;
  isResizing: boolean;
  resizeId!: number;
  resizeLocation!: string;
  initialClick: Point;
  constructor(factory: ShapeFactoryService) { 
    this.shapes = new Map<number, Shape>();
    this.selectedShapes = new Map<number, Shape>();
    this.availableIds = new Array<number>();
    this.clipBoard = new Map<number, Shape>();
    this.customShapes = new Map<number, Shape[]>();
    this.factory = factory;
    this.isDragging = false;
    this.isResizing = false;
    this.initialClick = new Point(0,0);
  }
  getAvailableId(): number{
    return this.availableIds.length > 0? Number(this.availableIds.shift()): this.shapes.size;
  }
  createShape(type: string, center:Point, fill: Color, stroke: Color, strokeWidth: number, customId: number): number{
    let id = this.getAvailableId();
      console.log(type);
      if(type.slice(0, 12) == 'custom shape') type = 'userdefined';
      let shape = this.factory.createShape(type, id, center);
      if(type == 'userdefined'){
        console.log("hi");
        this.createUserDefined(customId, shape);
      }else{
        shape.style = new Style();
        // shape.move(center);
        shape.setFill(fill);
        shape.setStroke(stroke);
        shape.setStrokeWidth(strokeWidth);
      }

      shape.setCursor("crosshair");
    // // }

    // shape.resize(center, [5,5,5,5], new Point);
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
    shape.setCursor("pointer"); 
  }

  clearSelected(){
    this.selectedShapes.forEach((shape) => {
      this.deselect(shape);
    });
    // this.selectedShapes = new Map<number, Shape>();
  }

  changeStyleSelected(style: Style){
    console.log("Changing Selected");
    this.selectedShapes.forEach((shape) =>{
      shape.setFill(style.fillColor.color);
      shape.setStroke(style.strokeColor.color);
      shape.setStrokeWidth(style.strokeWidth.toNumber());
    })
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

  resize(id: number, location: string, offset: Point, mouse: Point){
    let shape: any = this.shapes.get(id);
    console.log(id + " " + location + " " + offset + " " + mouse);
    shape.resize(location, offset, mouse);
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

  setDragging(initialClick: Point){
    //shape.dragging = true;
    this.isDragging = true;
    this.initialClick = initialClick;
  }

  clearDragging(){
    //shape.dragging = false;
    this.isDragging = false
  }

  finishCreation(id: number){
    this.shapes.get(id)?.setCursor("pointer")
  }

  setResize(id: number, initialPoint: Point, location:string): void{
    this.resizeId = id;
    this.isResizing = true;
    this.initialClick = initialPoint;
    this.resizeLocation = location;
  }

  clearResize(){
    this.isResizing = false;
  }

  createUserDefined(customId: number, shape: Shape){
    let prototype = this.customShapes.get(customId);
    console.log('initDims');
    console.log(shape);
    if(prototype){
      let minX = prototype[0].getMinX(), minY = prototype[0].getMinY(),
        maxX = prototype[0].getMaxX(), maxY = prototype[0].getMaxY(),
        minStroke = prototype[0].style.strokeWidth;
    shape.shapes.push(prototype[0].copy());
    for(let i = 1; i < prototype.length; i++){
      shape.shapes.push(prototype[i].copy());
      minX = Math.min(minX, prototype[i].getMinX());
      minY = Math.min(minY, prototype[i].getMinY());
      maxX = Math.max(maxX, prototype[i].getMaxX());
      maxY = Math.max(maxY, prototype[i].getMaxY());

    }
    shape.shapes.sort((a, b)=>{
      if(a.id >= b.id) return 1;
      return -1;
    });
    let offset = new Point(-1*minX, -1*minY);
    shape.shapes.forEach((shape) => {
        shape.move(offset);
        shape.move(new Point(15, 15));
    });
    shape.dimensions[0] = maxX - minX + 30;
    shape.dimensions[1] = maxY - minY + 30;

    shape.initialDims = [0, 0];
    shape.initialDims[0] = shape.dimensions[0];
    shape.initialDims[1] = shape.dimensions[1];

    // console.log(shape.initialDims[1]);
    }
  }

  addCustomShape(){
    if(this.selectedShapes.size > 0){
      let prototype = new Array<Shape>();
      this.selectedShapes.forEach((shape) =>{
        prototype.push(shape.copy());
      });
      this.customShapes.set(this.customShapes.size + 1, prototype);
    }
  }

  getCenter(id: number){
    return this.shapes.get(id)?.center.copy();
  }

  setCenter(center: Point, id: number){
    this.shapes.get(id)!.center = center.copy();
  }
}
