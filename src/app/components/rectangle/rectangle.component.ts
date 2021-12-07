import { Component, Input, OnInit } from '@angular/core';
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
    console.log(this.rectangle.fill.toString());
  }
  fillColor(){
    return `fill: ${this.rectangle.fill.toString()}`;
  }

  strokeColor(){
    return `stroke: ${this.rectangle.fill.toString()}`;
  }
}
