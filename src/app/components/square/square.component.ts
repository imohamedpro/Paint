import { Component, Input, OnInit } from '@angular/core';
import { Shape } from 'src/app/classes/Shape';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  // This decorator @Input() exposes our property (circle) to the world .. any parent component can use it.
  // Parent component: any component hosting this one through its selector.
  @Input() square!: Shape;

  constructor() { }

  ngOnInit(): void {
  }
  
  fillColor(){
    // return `fill: ${this.square.fill.toString()}`;
  }

  strokeColor(){
    // return `stroke: ${this.square.fill.toString()}`;
  }
}
