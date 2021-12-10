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
  @Output() styleChangeEmitter:EventEmitter<number>
        = new EventEmitter<number>();
  @Input() set createShape(value:string){
    console.log(value);
    if(value.slice(0,12) == "Custom Shape"){
      let lastRowIndex: number = this.rows.length-1; 
      console.log(lastRowIndex);
      console.log(this.rows);
      if(this.rows[lastRowIndex][1].icon === ""){
        let lastRowItem = this.rows[lastRowIndex][0];
        this.rows.pop();
        this.rows.push([lastRowItem,new MenuItem("dashboard",value)]);
      }else{
        this.rows.push([new MenuItem("dashboard",value), new MenuItem("","")]);
      }
    }
  }
  // @Input() set definedShape(defined: string){

  // }
  rows: MenuItem[][] = [[new MenuItem("open_with", "Move"),new MenuItem("╱","Line")],
                        [new MenuItem("□","Square"), new MenuItem("▭","Rectangle")],
                        [new MenuItem("○","Circle"), new MenuItem("⬭","Ellipse")],
                        [new MenuItem("△","Triangle"), new MenuItem("","")]]
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
  emitStyleChange(){
    this.styleChangeEmitter.emit(0)
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
    this.emitStyleChange();
  }

  updateStrokeColor(e: any){
    this.strokeColor = e.target.value;
    // let rgb = hexRgb(this.strokeColor)
    let color = new Color(this.strokeColor);
    this.style.strokeColor = new StrokeColor(color);
    console.log(this.style.strokeColor);
    this.emitStyle(this.style);
    this.emitStyleChange();
  }

  updateStrokeWidth(e: any){
    this.strokeWidth = parseInt(e.target.value);
    this.style.strokeWidth = new Dimensions(this.strokeWidth);
    console.log(this.style.strokeWidth);
    this.emitStyle(this.style);
    this.emitStyleChange();
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
