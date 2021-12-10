import { Shape } from '../../classes/Shape';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Point } from '../../classes/Point';
import { Color, FillColor, StrokeColor } from '../../classes/Style';
import { IShape } from '../../interfaces/IShape'
import { ShapeManagerService } from '../../services/ShapeManager/shape-manager.service';

@Component({
  selector: '[shape=ellipse]',
  templateUrl: './ellipse.component.html',
  styleUrls: ['./ellipse.component.css']
})
export class EllipseComponent implements OnInit{
  @Input() ellipse!: Shape; 
  manager: ShapeManagerService;
  initialClick!: Point;
  dragging: boolean; 
  ctrl: boolean;

  constructor(manager: ShapeManagerService) { 
    this.manager = manager;
    this.dragging = false;
    this.ctrl = false;
  }

  ngOnInit(): void {
    console.log(this.ellipse.style.toString());
  }

  @HostListener('window:keydown', ['$event'])
  ctrlDown(event: KeyboardEvent){
    console.log(event);
    if(event.key == 'Control'){
      console.log('ctrl down');
      this.ctrl = true;
    }else if(event.key === 'Delete'){
      this.manager.delete();
      console.log('delete is down');
    }
  }
  @HostListener('window:keyup', ['$event'])
  ctrlUp(event: KeyboardEvent){
    if(event.key == 'Control'){
      console.log("ctrl up");
      this.ctrl = false;
    }
  }


  clicked(): void {
    if(!this.dragging){
      // this.ellipse.isSelected = !this.ellipse.isSelected;

      if(this.manager.selectedShapes.size == 0){  //first one to be clicked
        this.manager.select(this.ellipse);

      }else if (this.ellipse.isSelected){
        this.manager.deselect(this.ellipse);

      }else if(!this.ellipse.isSelected && this.ctrl) {
        this.manager.select(this.ellipse);
      }else{
        this.manager.clearSelected();
        this.manager.select(this.ellipse);
      }
      // this.ellipse.isSelected = true;
      // if(this.ellipse.isSelected){
      //   this.manager.select(this.ellipse);
      // }else{
      //   this.manager.deselect(this.ellipse.id);
      // }
      if(this.ellipse.isSelected){
        this.ellipse.setFill(new Color(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255), 1));
        this.ellipse.setStroke(new Color(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255), 1));
        console.log(this.manager);
      }
    }


  }
  mouseDown(e: MouseEvent):void {
    if(e.button == 0){
      this.initialClick = new Point(e.clientX, e.clientY);
      this.manager.setDragging(this.initialClick);
      console.log(this.initialClick);
    }
  }
}
