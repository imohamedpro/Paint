import { Injectable } from '@angular/core';
import { IShape } from '../../interfaces/IShape';
import { ShapeFactoryService } from '../ShapeFactory/shape-factory.service';

@Injectable({
  providedIn: 'root'
})
export class ShapeManagerService {
  shapes: Map<number, IShape>;
  selectedShapes: Map<number, IShape>;
  factory: ShapeFactoryService;

  constructor(factory: ShapeFactoryService) { 
    this.shapes = new Map<number, IShape>();
    this.selectedShapes = new Map<number, IShape>();
    this.factory = factory;
  }
}
