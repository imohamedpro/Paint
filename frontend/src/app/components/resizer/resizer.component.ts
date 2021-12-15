import { Component, Input, OnInit } from '@angular/core';
import { Point } from '../../classes/Point';
import { ShapeManagerService } from '../../services/ShapeManager/shape-manager.service';

@Component({
  selector: '[resizer]',
  templateUrl: './resizer.component.html',
  styleUrls: ['./resizer.component.css']
})
export class ResizerComponent implements OnInit {
  @Input() x!: number;
  @Input() y!: number;
  @Input() location!: string; 
  @Input('shapeId') id!: number;
  manager: ShapeManagerService;
  initialClick!: Point;
  constructor(manager: ShapeManagerService) { 
    this.manager = manager;
  }

  ngOnInit(): void {
    console.log(this.x + " " + this.y);
  }

  mouseDown(e: MouseEvent){
    if(e.button == 0){
      this.initialClick = new Point(e.clientX, e.clientY);
      this.manager.setResize(this.id, this.initialClick, this.location);
    }
  }
}
