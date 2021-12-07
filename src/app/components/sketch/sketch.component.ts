import { Component, OnInit } from '@angular/core';
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
    this.manager.createShape('circle', {x:100, y:100}, new FillColor(110, 100, 30, 0.5), new StrokeColor(0, 100, 30, 1), 5);

  }
  

}
