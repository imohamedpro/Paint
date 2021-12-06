import { Component, OnInit } from '@angular/core';
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
    this.manager.createShape('circle', {x:50, y:50}, {red: 0, green: 100, blue: 30, alpha:100}, {red: 0, green: 100, blue: 30, alpha:100});
  }
  

}
