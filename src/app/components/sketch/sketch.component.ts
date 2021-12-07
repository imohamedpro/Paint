import { Component, OnInit } from '@angular/core';
import { Color } from '../../classes/Color';
import { Shape } from '../../classes/Shape';
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
    this.manager.createShape('circle', {x:100, y:100}, new Color(110, 100, 30, 0.5), new Color(0, 100, 30, 1));
    this.manager.createShape('rectangle', {x:300, y:300}, new Color(110, 100, 30, 0.5), new Color(0, 100, 30, 1));
  }
  

}
