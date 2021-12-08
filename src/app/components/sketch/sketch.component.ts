import { unescapeIdentifier } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Point } from '../../classes/Point';
import { Shape } from '../../classes/Shape';
import { FillColor, StrokeColor } from '../../classes/Style';
import { ShapeManagerService } from '../../services/ShapeManager/shape-manager.service';

@Component({
  selector: 'app-sketch',
  templateUrl: './sketch.component.html',
  styleUrls: ['./sketch.component.css']
})
export class SketchComponent implements OnInit {
  manager: ShapeManagerService;
  constructor(manager: ShapeManagerService) {
    this.manager = manager;
   }

  ngOnInit(): void {
    // this.manager.createShape('circle', new Point(100, 100), new FillColor(110, 100, 30, 0.5), new StrokeColor(0, 100, 30, 1), 5);
    this.manager.createShape('circle', new Point(450, 450), new FillColor(110, 100, 30, 0.5), new StrokeColor(0, 100, 30, 1), 5);
    this.manager.createShape('line',new Point(300,300), new FillColor(110, 100, 30, 0.5), new StrokeColor(0, 100, 30, 1), 5);
    this.manager.createShape('square', new Point(600,600), new FillColor(2, 200, 2, 0.5), new StrokeColor(0, 100, 30, 1), 8);
  }
  

}
