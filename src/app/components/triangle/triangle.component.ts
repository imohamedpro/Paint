import { Component, ElementRef, Host, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Triangle } from '../../classes/Triangle';
import { Point } from '../../classes/Point';
import { Shape } from '../../classes/Shape';
import { Color, FillColor, StrokeColor } from '../../classes/Style';
import { ShapeManagerService } from '../../services/ShapeManager/shape-manager.service';

@Component({
  selector: '[shape=triangle]',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.css']
})
export class TriangleComponent implements OnInit {
  @Input() triangle! : Shape;
  manager : ShapeManagerService;
  initialClick! : Point;
  dragging: boolean;
  ctrl: boolean;
  ctrlC: boolean;

  constructor(manager: ShapeManagerService) { 
    this.manager = manager;
    this.dragging = false;
    this.ctrl =false;
    this.ctrlC = false;
  }

  ngOnInit(): void {
  }

  @HostListener('window:keydown',['$event'])
  ctrlOrDeleteDown(event: KeyboardEvent){
    if(event.ctrlKey && event.key === 'c'){
      console.log("ctrl + c is done");
      this.manager.ctrlC();
      this.ctrlC = true;
    }
    else if(event.ctrlKey && event.key === 'v' && this.ctrlC){
      this.manager.paste();
    }
    else if(event.ctrlKey){
      this.ctrl = true;
      console.log(this.ctrl);
    }
    else if(event.key === 'Delete'){
      this.manager.delete();
      console.log('delete is down');
    }
  }

  @HostListener('window:keyup',['$event'])
  ctrlUp(event: KeyboardEvent){
    if(event.ctrlKey){
      this.ctrl = false;
      console.log(this.ctrl);
    }
    else if(event.key === 'c'){
      this.ctrlC = false;
    }
  }

  /*@HostListener('window:keydown',['$event'])
    deleteDown(event: KeyboardEvent){
      if(event.key === 'Delete'){
        this.delete = true;
        this.deleteShape();
        console.log('delete is down');
      }
    }
  @HostListener('window:keyup',['$event'])
    deleteUp(event: KeyboardEvent){
      if(event.key === 'Delete'){
        this.delete = false;
        console.log('delete is up');
      }
    }*/
  

  clicked(): void {
    if(!this.dragging){
      if(this.manager.selectedShapes.size == 0){
        this.manager.select(this.triangle);

      }else if (this.triangle.isSelected){
        this.manager.deselect(this.triangle);

      }else if(!this.triangle.isSelected && this.ctrl) {
        this.manager.select(this.triangle);
      }else{
        this.manager.clearSelected();
        this.manager.select(this.triangle);
      }
      // this.circle.isSelected = true;
      // if(this.circle.isSelected){
      //   this.manager.select(this.circle);
      // }else{
      //   this.manager.deselect(this.circle.id);
      // }
      this.triangle.setStroke(new Color(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255), 1));
      this.triangle.setFill(new Color(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255), 1));
      console.log(this.manager);
    }


  }
  mouseDown(e: MouseEvent):void {
    if(e.button == 0){
      this.dragging = true;

      this.initialClick = new Point(e.clientX, e.clientY);
      console.log(this.initialClick);
    }
  }
  move(e: MouseEvent): void {
    if(e.button == 0 && this.dragging && this.triangle.isSelected){
      let offset: Point = new Point(e.clientX - this.initialClick.x, e.clientY - this.initialClick.y);
      console.log(offset);
      this.initialClick = new Point(e.clientX, e.clientY);
      this.manager.move(offset);
    }
  }
  mouseUp(e: MouseEvent): void{
    if(this.dragging){
      this.dragging = false;
    }
  }

  pointsGetter(): string {
    return `${this.triangle.center.x},${this.triangle.center.y} ${this.triangle.dimensions[0]},${this.triangle.dimensions[1]} ${this.triangle.dimensions[2]},${this.triangle.dimensions[3]}`;
  }


}

