import { Rectangle } from './../../classes/Rectangle';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shapebar',
  templateUrl: './shapebar.component.html',
  styleUrls: ['./shapebar.component.css']
})
export class ShapebarComponent implements OnInit {

  constructor() { }
  ellipse: string = "⬭";
  triangle: string = "△";
  ngOnInit(): void {
  }

  mouseoverEllipse(){
    this.ellipse = "⬬";
  }
  mouseoutEllipse(){
    this.ellipse = "⬭"
  }
  mouseoverTriangle(){
    this.triangle = "▲"
  }
  mouseoutTriangle(){
    this.triangle ="△"
  }
}
