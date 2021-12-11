import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Point } from '../../classes/Point';
import { Shape } from '../../classes/Shape';
import { UserDefined } from '../../classes/UserDefined';
import { ShapeManagerService } from '../../services/ShapeManager/shape-manager.service';

@Component({
  selector: '[shape=userDefined]',
  templateUrl: './user-defined.component.html',
  styleUrls: ['./user-defined.component.css']
})
export class UserDefinedComponent implements OnInit {
  @Input('custom') shape!: any;
  ready: boolean;
  manager: ShapeManagerService;
  initialClick!: Point;
  dragging: boolean; 
  ctrl: boolean;
  constructor(manager: ShapeManagerService) { 
    this.manager = manager;
    this.dragging = false;
    this.ctrl = false;
    this.ready = false;
  }

  ngOnInit(): void {
    console.log("init");

    console.log(this.shape);
    // console.log(this.shape.initialDims);
    this.ready = true;
  }
  getScaleX(): number{
    // console.log(this.ready);
    if(this.ready){
      return this.shape.dimensions[0] / this.shape.initialDims[0];
    }
    return 1;
  }
  getScaleY(): number{
    if(this.ready){
      return this.shape.dimensions[1] / this.shape.initialDims[1];
    }
    return 1;
  }
  pointsGetter(shape: Shape): string {
    return `${shape.center.x},${shape.center.y} ${shape.dimensions[0]},${shape.dimensions[1]} ${shape.dimensions[2]},${shape.dimensions[3]}`;
  }



  
  @HostListener('window:keydown', ['$event'])
  ctrlDown(event: KeyboardEvent){
    console.log(event);
    if(event.key == 'Control'){
      console.log('ctrl down');
      this.ctrl = true;
    }
    else if(event.key === 'Delete'){
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
      if(this.manager.selectedShapes.size == 0){  //first one to be clicked
        this.manager.select(this.shape);

      }else if (this.shape.isSelected){
        this.manager.deselect(this.shape);

      }else if(!this.shape.isSelected && this.ctrl) {
        this.manager.select(this.shape);
      }else{
        this.manager.clearSelected();
        this.manager.select(this.shape);
      }
    }
    console.log(this.manager);

  }
  mouseDown(e: MouseEvent):void {
    if(e.button == 0 && this.shape.isSelected){
      this.initialClick = new Point(e.clientX, e.clientY);
      this.manager.setDragging(this.initialClick);
      console.log(this.initialClick);
    }
  }
}
