import { Component, Input, OnInit } from '@angular/core';
import { Shape } from '../../classes/Shape';
import { IShape } from '../../interfaces/IShape'

@Component({
  selector: '[shape=circle]',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {
  @Input() circle!: Shape; 
  // styles = {
  //   'fill': this.circle.fill.toString(),
  //   'stroke' : this.circle.stroke.toString()
  // }
  constructor() { 
    
  }

  ngOnInit(): void {
    console.log(this.circle.style.toString());
  }
  // fillColor(){
  //   return `fill: ${this.circle.fill.toString()}`;
  // }

  // strokeColor(){
  //   return `stroke: ${this.circle.fill.toString()}`;
  // }
}
