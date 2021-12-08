import { Component, Input, OnInit } from '@angular/core';
import { Point } from '../../classes/Point';
import { Shape } from '../../classes/Shape';
import { FillColor, StrokeColor } from '../../classes/Style';
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
  dragging: boolean = false; 
  // styles = {
  //   'fill': this.circle.fill.toString(),
  //   'stroke' : this.circle.stroke.toString()
  // }
  constructor(manager: ShapeManagerService) { 
    this.manager = manager;
  }

  ngOnInit(): void {
    console.log(this.circle.style.toString());
  }

  clicked(): void {
    if(!this.dragging){
      this.circle.isSelected = !this.circle.isSelected;
      if(this.circle.isSelected){
        this.manager.select(this.circle);
      }else{
        this.manager.deselect(this.circle.id);
      }
    }
    this.circle.setFill(new FillColor(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255), 0.25));
    this.circle.setStroke(new StrokeColor(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255), 0.25));
    console.log(this.manager);

  }
  mouseDown(e: MouseEvent):void {
    if(e.button == 0){
      this.dragging = true;

      this.initialClick = new Point(e.clientX, e.clientY);
      console.log(this.initialClick);
    }
  }
  move(e: MouseEvent): void {
    if(e.button == 0 && this.circle.isSelected && this.dragging){
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
  // fillColor(){
  //   return `fill: ${this.circle.fill.toString()}`;
  // }

  // strokeColor(){
  //   return `stroke: ${this.circle.fill.toString()}`;
  // }
}
