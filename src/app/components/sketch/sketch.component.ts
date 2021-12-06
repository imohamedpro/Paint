import { Component, OnInit } from '@angular/core';
import { Shape } from '../../classes/Shape';
import { IShape } from '../../interfaces/IShape';

@Component({
  selector: 'app-sketch',
  templateUrl: './sketch.component.html',
  styleUrls: ['./sketch.component.css']
})
export class SketchComponent implements OnInit {
  shapes: IShape[];
  constructor() {
    this.shapes = [];
   }

  ngOnInit(): void {

  }

}
