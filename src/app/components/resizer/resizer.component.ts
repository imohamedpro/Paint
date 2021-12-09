import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Point } from '../../classes/Point';
import { SelectionB } from '../../classes/Selection';
import { ShapeManagerService } from '../../services/ShapeManager/shape-manager.service';

@Component({
  selector: '[resizer]',
  templateUrl: './resizer.component.html',
  styleUrls: ['./resizer.component.css']
})
export class ResizerComponent implements OnInit {
  // @Input() function;
  // selected!: SelectionB;
  @Input() x!: number;
  @Input() y!: number;
  @Input() location!: string; 
  @Input('shapeId') id!: number;
  manager: ShapeManagerService;
  dragging: boolean = false;
  initialClick!: Point;
  constructor(manager: ShapeManagerService) { 
    // console.log(this.x + ' ' + this.y);
    this.manager = manager;
  }

  ngOnInit(): void {
    // this.selected = new SelectionB();
    console.log(this.x + " " + this.y);
  }

  @HostListener('window: mousedown', ['$event'])
  mouseDown(e: MouseEvent){
    if(e.button == 0){
      this.dragging = true;
      this.initialClick = new Point(e.clientX, e.clientY);
      console.log()
    }
  }

  @HostListener('window: mousemove', ['$event'])
  mouseMove(e: MouseEvent){
    if(e.button == 0 && this.dragging){
      let offset: Point = new Point(e.clientX - this.initialClick.x, e.clientY - this.initialClick.y);
      this.initialClick = new Point(e.clientX, e.clientY);
      this.manager.resize(this.id, this.location, offset);
    }
  }
}
