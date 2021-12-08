import { Component, Input, OnInit } from '@angular/core';
import { Point } from '../../classes/Point';
import { Shape } from '../../classes/Shape';
import { FillColor, StrokeColor } from '../../classes/Style';
import { IShape } from '../../interfaces/IShape'
import { ShapeManagerService } from '../../services/ShapeManager/shape-manager.service';

@Component({
  selector: '[shape=ellipse]',
  templateUrl: './ellipse.component.html',
  styleUrls: ['./ellipse.component.css']
})
export class EllipseComponent implements OnInit{
  @Input() ellipse!: Shape; 
  manager: ShapeManagerService;
  initialClick!: Point;
  dragging: boolean = false; 
  // styles = {
  //   'fill': this.ellipse.fill.toString(),
  //   'stroke' : this.ellipse.stroke.toString()
  // }
  constructor(manager: ShapeManagerService) { 
    this.manager = manager;
  }

  ngOnInit(): void {
    console.log(this.ellipse.style.toString());
  }

  clicked(): void {
    if(!this.dragging){
      this.ellipse.isSelected = !this.ellipse.isSelected;
      if(this.ellipse.isSelected){
        this.manager.select(this.ellipse);
      }else{
        this.manager.deselect(this.ellipse.id);
      }
    }
    this.ellipse.setFill(new FillColor(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255), 0.25));
    this.ellipse.setStroke(new StrokeColor(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255), 0.25));
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
    if(e.button == 0 && this.ellipse.isSelected && this.dragging){
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
  //   return `fill: ${this.ellipse.fill.toString()}`;
  // }

  // strokeColor(){
  //   return `stroke: ${this.ellipse.fill.toString()}`;
  // }
}
