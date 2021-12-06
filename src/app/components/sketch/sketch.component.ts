import { Component, OnInit } from '@angular/core';
import { Shape } from '../../classes/Shape';
import { IShape } from '../../interfaces/IShape';
import { ShapeFactoryService } from '../../services/shape-factory.service';

@Component({
  selector: 'app-sketch',
  templateUrl: './sketch.component.html',
  styleUrls: ['./sketch.component.css']
})
export class SketchComponent implements OnInit {
  shapes: IShape[];
  selectedShapes;
  factory: ShapeFactoryService;
  constructor(factory: ShapeFactoryService) {
    this.shapes = [];
    this.selectedShapes = {};
    this.factory = factory;
   }

  ngOnInit(): void {
  }
  

}
