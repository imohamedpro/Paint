import { Style, FillColor, StrokeColor, Dimensions, Color} from './../../classes/Style';
import { MenuItem } from './../../classes/MenuItem';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import hexRgb from 'hex-rgb';

@Component({
  selector: 'app-shapebar',
  templateUrl: './shapebar.component.html',
  styleUrls: ['./shapebar.component.css']
})
export class ShapebarComponent implements OnInit {

  constructor() { }
  @Output() modeEmitter:EventEmitter<string>
       = new EventEmitter<string>();
  @Output() styleEmitter:EventEmitter<Style>
        = new EventEmitter<Style>();
  // @Input() set definedShape(defined: string){

  // }
  rows: MenuItem[][] = [[new MenuItem("open_with", "Move"),new MenuItem("╱","Line")],
                        [new MenuItem("□","Square"), new MenuItem("▭","Rectangle")],
                        [new MenuItem("○","Circle"), new MenuItem("⬭","Ellipse")],
                        [new MenuItem("△","Triangle"), new MenuItem("dashboard","Custom Shape 1")]]
  fillColor: string = '#ff0000';
  strokeColor: string = '#570000'
  strokeWidth: number = 5;
  style: Style = new Style();                      
  ngOnInit(): void {
    // let rgb = hexRgb(this.fillColor)
    let color = new Color(this.fillColor);
    this.style.fillColor = new FillColor(color);
    // rgb = hexRgb(this.strokeColor)
    color = new Color(this.strokeColor);
    this.style.strokeColor = new StrokeColor(color);
    this.style.strokeWidth = new Dimensions(this.strokeWidth);
    this.emitStyle(this.style);
    //console.log(this.style);
  }
  emitMode(mode: string){
    this.modeEmitter.emit(mode);
  }
  emitStyle(style: Style){
    this.styleEmitter.emit(style);
  }
  click(menuItem: MenuItem):void{
    for(let item of this.rows){
      item[0].declick();
      item[1].declick();
    }
    menuItem.click();
    this.emitMode(menuItem.text);
  }
  updateFillColor(e: any){
    this.fillColor = e.target.value;
    // let rgb = hexRgb(this.fillColor)
    let color = new Color(this.fillColor);
    this.style.fillColor = new FillColor(color);
    console.log(this.style.fillColor);
    this.emitStyle(this.style);
  }

  updateStrokeColor(e: any){
    this.strokeColor = e.target.value;
    // let rgb = hexRgb(this.strokeColor)
    let color = new Color(this.strokeColor);
    this.style.strokeColor = new StrokeColor(color);
    console.log(this.style.strokeColor);
    this.emitStyle(this.style);
  }

  updateStrokeWidth(e: any){
    this.strokeWidth = parseInt(e.target.value);
    this.style.strokeWidth = new Dimensions(this.strokeWidth);
    console.log(this.style.strokeWidth);
    this.emitStyle(this.style);
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
