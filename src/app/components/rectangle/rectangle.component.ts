import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Point } from '../../classes/Point';
import { Shape } from '../../classes/Shape';
import { FillColor, StrokeColor } from '../../classes/Style';
import { IShape } from '../../interfaces/IShape'
import { ShapeManagerService } from '../../services/ShapeManager/shape-manager.service';

@Component({
  selector: '[shape=rectangle]',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit{
  @Input() rectangle!: Shape; 
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
    console.log(this.rectangle.style.toString());
  }

  @HostListener('window:keydown', ['$event'])
  ctrlDown(event: KeyboardEvent){
    console.log(event);
    if(event.key == 'Control'){
      console.log('ctrl down');
      this.ctrl = true;
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
      // this.rectangle.isSelected = !this.rectangle.isSelected;

      if(this.manager.selectedShapes.size == 0 || this.ctrl){
        this.manager.clearSelected();
      }
      // this.rectangle.isSelected = true;
      this.manager.select(this.rectangle);
      // if(this.rectangle.isSelected){
      //   this.manager.select(this.rectangle);
      // }else{
      //   this.manager.deselect(this.rectangle.id);
      // }
      this.rectangle.setFill(new FillColor(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255), 1));
      this.rectangle.setStroke(new StrokeColor(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255), 1));
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
    if(e.button == 0 && this.dragging && this.rectangle.isSelected){
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
