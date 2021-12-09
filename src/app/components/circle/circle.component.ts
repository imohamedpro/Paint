import { Shape } from '../../classes/Shape';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Point } from '../../classes/Point';
import { Color, FillColor, StrokeColor } from '../../classes/Style';
import { IShape } from '../../interfaces/IShape'
import { ShapeManagerService } from '../../services/ShapeManager/shape-manager.service';

@Component({
  selector: '[shape=circle]',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit{
  @Input() circle!: Shape; 
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
    console.log(this.circle.style.toString());
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
      // this.circle.isSelected = !this.circle.isSelected;

      if(this.manager.selectedShapes.size == 0){  //first one to be clicked
        this.manager.select(this.circle);

      }else if (this.circle.isSelected){
        this.manager.deselect(this.circle);

      }else if(!this.circle.isSelected && this.ctrl) {
        this.manager.select(this.circle);
      }else{
        this.manager.clearSelected();
        this.manager.select(this.circle);
      }
      // this.circle.isSelected = true;
      // if(this.circle.isSelected){
      //   this.manager.select(this.circle);
      // }else{
      //   this.manager.deselect(this.circle.id);
      // }
      this.circle.setFill(new Color(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255), 1));
      this.circle.setStroke(new Color(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255), 1));
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
    if(e.button == 0 && this.dragging && this.circle.isSelected){
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
