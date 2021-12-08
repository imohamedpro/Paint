import { Component, Input, OnInit } from '@angular/core';
import { Point } from 'src/app/classes/Point';
import { Shape } from '../../classes/Shape';

@Component({
  selector: '[shape=rectangle]',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {
  @Input() rectangle!: Shape; 
  // styles = {
  //   'fill': this.circle.fill.toString(),
  //   'stroke' : this.circle.stroke.toString()
  // }
  constructor() { 
    
  }

  ngOnInit(): void {
    console.log(this.rectangle.style.toString());
  }

  // fire(e: MouseEvent): void{
  //    if(this.rectangle.isSelected && e.which == 1){
  //     e.stopPropagation();
  //     console.log(e);
  //     let offsetX = this.rectangle.center.x + e.movementX;
  //     let offsetY = this.rectangle.center.y + e.movementY;
  //     this.rectangle.move(new Point(offsetX, offsetY));
  //    }
  // }
  // fillColor(){
  //   return `fill: ${this.rectangle.fill.toString()}`;
  // }

  // strokeColor(){
  //   return `stroke: ${this.rectangle.fill.toString()}`;
  // }
}
