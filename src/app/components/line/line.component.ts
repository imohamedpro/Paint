import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Line } from '../../classes/Line';
import { Point } from '../../classes/Point';
import { Shape } from '../../classes/Shape';
import { Color, FillColor, StrokeColor } from '../../classes/Style';
import { IShape } from '../../interfaces/IShape'
import { ShapeManagerService } from '../../services/ShapeManager/shape-manager.service';


@Component({
  selector: '[shape=line]',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
  @Input() line!: Shape; 
  manager: ShapeManagerService;
  initialClick!: Point;
  dragging: boolean; 
  ctrl: boolean;

  constructor(manager: ShapeManagerService) { 
    this.manager = manager;
    this.dragging = false;
    this.ctrl = false;
  }

  ngOnInit(): void {
    console.log(this.line.style.toString());
  }

  @HostListener('window:keydown', ['$event'])
  ctrlDown(event: KeyboardEvent){
    console.log(event);
    if(event.key == 'Control'){
      console.log('ctrl down');
      this.ctrl = true;
    }
    else if(event.key === 'Delete'){
      this.manager.delete();
      console.log('delete is down');
    }
  }
  @HostListener('window:keyup', ['$event'])
  ctrlUp(event: KeyboardEvent){
    if(event.key == 'Control'){
      console.log("ctrl up");
      this.ctrl = false;
    }
  }


  clicked(): void {
    if(!this.dragging){
      if(this.manager.selectedShapes.size == 0){
        this.manager.select(this.line);

      }else if (this.line.isSelected){
        this.manager.deselect(this.line);

      }else if(!this.line.isSelected && this.ctrl) {
        this.manager.select(this.line);
      }else{
        this.manager.clearSelected();
        this.manager.select(this.line);
      }
      // this.circle.isSelected = true;
      // if(this.circle.isSelected){
      //   this.manager.select(this.circle);
      // }else{
      //   this.manager.deselect(this.circle.id);
      // }
      this.line.setStroke(new Color(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255), 1));
      console.log(this.manager);
    }


  }
  mouseDown(e: MouseEvent):void {
    if(e.button == 0){
      this.dragging = true;

      this.initialClick = new Point(e.clientX, e.clientY);
      console.log(this.initialClick);
    }
  }
  move(e: MouseEvent): void {
    if(e.button == 0 && this.dragging && this.line.isSelected){
      let offset: Point = new Point(e.clientX - this.initialClick.x, e.clientY - this.initialClick.y);
      console.log(offset);
      this.initialClick = new Point(e.clientX, e.clientY);
      this.manager.move(offset);
    }
  }
  mouseUp(e: MouseEvent): void{
    if(this.dragging){
      this.dragging = false;
    }
  }
}
