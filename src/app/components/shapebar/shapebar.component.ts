import { MenuItem } from './../../classes/MenuItem';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-shapebar',
  templateUrl: './shapebar.component.html',
  styleUrls: ['./shapebar.component.css']
})
export class ShapebarComponent implements OnInit {

  constructor() { }
  @Output() emitter:EventEmitter<string>
       = new EventEmitter<string>();
  rows: MenuItem[][] = [[new MenuItem("open_with", "Move"),new MenuItem("╱","Line")],
                        [new MenuItem("□","Square"), new MenuItem("▭","Rectangle")],
                        [new MenuItem("○","Circle"), new MenuItem("⬭","Ellipse")],
                        [new MenuItem("△","Triangle"), new MenuItem("","")]]
  ngOnInit(): void {
  }
  emit(action: string){
    this.emitter.emit(action);
}

click(menuItem: MenuItem):void{
  for(let item of this.rows){
    item[0].declick();
    item[1].declick();
  }
  menuItem.click();
  this.emit(menuItem.text);
}

  // mouseoverEllipse(){
  //   this.ellipse = "⬬";
  // }
  // mouseoutEllipse(){
  //   this.ellipse = "⬭"
  // }
  // mouseoverTriangle(){
  //   this.triangle = "▲"
  // }
  // mouseoutTriangle(){
  //   this.triangle ="△"
  // }
  // mouseoverCircle(){
  //   this.circle = "●"
  // }
  // mouseoutCircle(){
  //   this.circle ="○"
  // }
  // mouseoverSquare(){
  //   this.square = "■"
  // }
  // mouseoutSquare(){
  //   this.square ="□"
  // }
  // mouseoverRectangle(){
  //   this.rectangle = "▬"
  // }
  // mouseoutRectangle(){
  //   this.rectangle ="▭"
  // }
}
