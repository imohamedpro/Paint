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
  }
  

}
