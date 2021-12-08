import { Component, Input, OnInit } from '@angular/core';
import { Shape } from 'src/app/classes/Shape';
import { Point } from '../../classes/Point';
import { FillColor, StrokeColor } from '../../classes/Style';
import { IShape } from '../../interfaces/IShape'
import { ShapeManagerService } from '../../services/ShapeManager/shape-manager.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  // This decorator @Input() exposes our property (circle) to the world .. any parent component can use it.
  // Parent component: any component hosting this one through its selector.
  @Input() square!: Shape;
  manager: ShapeManagerService;
  initialClick!: Point;
  dragging: boolean = false; 


  constructor(manager: ShapeManagerService) { 
    this.manager = manager;
  }

  ngOnInit(): void {
    
  }

  clicked(): void {
    if(!this.dragging){
      this.square.isSelected = !this.square.isSelected;
      if(this.square.isSelected){
        this.manager.select(this.square);
      }else{
        this.manager.deselect(this.square.id);
      }
    }
    this.square.setFill(new FillColor(14, 145, 14, 0.5));
    this.square.setStroke(new StrokeColor(0,0,0, 0.5));
  }

  mouseDown(e: MouseEvent): void {
    if(e.button == 0){    // left click only
      this.dragging = true;
      this.initialClick = new Point(e.clientX, e.clientY);
      console.log(this.initialClick);
    }
  }
  move(e: MouseEvent): void {
    if(e.button == 0 && this.square.isSelected && this.dragging){
      let offset: Point = new Point(e.clientX - this.initialClick.x, e.clientY - this.initialClick.y);
      console.log(offset);
      this.initialClick = new Point(e.clientX, e.clientY);
      this.manager.move(offset);
    }
  }
  mouseUp(e: MouseEvent): void {
    if(this.dragging){
      this.dragging = false;
    }
  }


  
  // fillColor(){
  //   return `fill: ${this.square.fill.toString()}`;
  // }

  // strokeColor(){
  //   return `stroke: ${this.square.fill.toString()}`;
  // }
}
