import { Cursor } from './../../classes/Style';
import { Component,  OnInit, Input, HostListener } from '@angular/core';
import { Point } from '../../classes/Point';
import { Shape } from '../../classes/Shape';
import { Style, Color, Dimensions, FillColor, StrokeColor } from '../../classes/Style';
import { ShapeManagerService } from '../../services/ShapeManager/shape-manager.service';

@Component({
  selector: 'app-sketch',
  templateUrl: './sketch.component.html',
  styleUrls: ['./sketch.component.css']
})
export class SketchComponent implements OnInit {
  manager: ShapeManagerService;
  @Input() mode:string;
  @Input() style:Style;
  @Input() set styleChange(value:number){
    console.log("Style Change Recieved");
    this.manager.changeStyleSelected(this.style.copy());
  }
  @Input() set _action(value:string){
    console.log(value);
    this.action = value;
    switch(this.action){
      case 'Copy':
        this.manager.ctrlC();
        this.ctrlC = true;
        break;
      case 'Paste':
        if(this.ctrlC){
          this.manager.paste();
        }
        break;
      case 'Delete':
        this.manager.delete();
        break;
    }
  };
  constructor(manager: ShapeManagerService) {
    this.manager = manager;
    this.mode = "Move";
    this.action = "";
    this.style = new Style();
    this.ctrlC = false;
    this.ctrl = false;
    this.isMouseDown = false;
    this.id = 0;
    this.dim = [0,0,0,0]
    this.svgCursor = new Cursor("auto")
   }

  ngOnInit(): void {
    // this.manager.createShape('circle', new Point(100, 100), this.style.fillColor.color, this.style.strokeColor.color, this.style.strokeWidth.toNumber());
    // this.manager.createShape('rectangle', new Point(300, 300), new Color(110, 100, 30, 0.5), new Color(0, 100, 30, 1), 5);
    // this.manager.createShape('circle', new Point(450, 450), new Color(110, 100, 30, 0.5), new Color(0, 100, 30, 1), 5);
    // this.manager.createShape('ellipse', new Point(100, 500), new Color(110, 100, 30, 0.5), new Color(0, 100, 30, 1), 5);
    // this.manager.createShape('line', new Point(300, 300), new Color(110, 100, 30, 0.5), new Color(0, 100, 30, 1), 5);
    // this.manager.createShape('triangle', new Point(50, 50), new Color(110, 100, 30, 0.5), new Color(0, 100, 30, 1), 5);
    // this.manager.createShape('square', new Point(600,600), new Color(2, 200, 2, 0.5), new Color(0, 100, 30, 1), 8);
  }

  initialClick!: Point;
  tempClick!: Point;
  action: string;
  isMouseDown: boolean;
  ctrlC: boolean;
  ctrl: boolean;
  id: number;
  dim: Array<number>;
  svgCursor: Cursor;
  
   @HostListener('window:keydown',['$event'])
   ctrlOrDeleteDown(event: KeyboardEvent){
     if(event.ctrlKey){
       this.ctrl = true;
       this.manager.ctrlDown = true;
       console.log('ctrl');

       if(event.key == 'c'){
        //  console.log("ctrl + c is done");
        this.manager.ctrlC();
        this.ctrlC = true;
       }else if(event.key == 'a'){
         event.preventDefault();
         this.manager.selectAll();
       }else if(event.key === 'v' && this.ctrlC){
          this.manager.paste();
       }
    //  }
    //  else if(event.ctrlKey && event.key === 'v' && this.ctrlC){
    // //  }
    //  else if(event.ctrlKey){
      //  this.ctrl = true;
      //  console.log(this.ctrl);
     }else if(event.key === 'Delete'){
       this.manager.delete();
      //  console.log('delete is down');
     }
   }
 
   @HostListener('window:keyup',['$event'])
   ctrlUp(event: KeyboardEvent){
     if(event.ctrlKey){
       this.ctrl = false;
       this.manager.ctrlDown = false;
      //  console.log(this.ctrl);
     }
     else if(event.key === 'c'){
       this.ctrlC = false;
     }
   }
  // random():number{
  //   return Math.random()*800;
  // }

  // click():void{
  //   console.log(this.mode);
  //   console.log(this.style);
  // }
  mouseDown(e: MouseEvent):void {
    if(e.button == 0 && this.mode != 'Move'){
      this.manager.clearSelected();
      this.isMouseDown = true;
      this.initialClick = new Point(e.offsetX, e.offsetY);
      this.tempClick = new Point(e.offsetX, e.offsetY);
      this.id = this.manager.createShape(this.mode.toLowerCase(), this.initialClick, this.style.fillColor.color, this.style.strokeColor.color, this.style.strokeWidth.toNumber(), Number(this.mode.slice(13)));
      if(this.mode == 'Line') this.manager.draw(this.id, [e.offsetX,e.offsetY]);
      else if(this.mode == 'triangle') this.manager.draw(this.id, [e.offsetX,e.offsetY,e.offsetX,e.offsetY]);
      else if(this.mode.slice(0, 12) == 'Custom Shape'){
        console.log(this.mode.toLowerCase());
        // this.isMouseDown = false;
        // this.manager.createShape()
      }
      console.log(this.initialClick);
    }
  }

  move(e: MouseEvent): void {
    if(e.button == 0){
      if(this.isMouseDown && this.mode != 'Move'){
        this.svgCursor = new Cursor("crosshair");
        if(this.mode == 'Line'){
          this.dim = [e.offsetX,e.offsetY]
        }else if(this.mode == 'Triangle'){
          this.dim = [e.offsetX,e.offsetY,e.offsetX+50,e.offsetY+55]
        }else{
          if(e.offsetX < this.initialClick.x){
            let center: Point = new Point(e.offsetX, this.manager.getCenter(this.id)!.y);
            this.manager.setCenter(center, this.id);
            this.dim[0] += this.tempClick.x - e.offsetX;
          }else{
            this.dim[0] += e.offsetX - this.tempClick.x;
          }

          if(e.offsetY < this.initialClick.y){
            let center: Point = new Point(this.manager.getCenter(this.id)!.x, e.offsetY);
            this.manager.setCenter(center, this.id);
            this.dim[1] += this.tempClick.y - e.offsetY;
          }else{
            this.dim[1] += e.offsetY - this.tempClick.y;
          }

          this.tempClick = new Point(e.offsetX, e.offsetY);
          
          if(this.mode == 'Square'){
            this.dim = [this.dim[0],this.dim[0]];
          }
         }
         console.log(this.dim);
          this.manager.draw(this.id, this.dim);

     }else if(this.mode == 'Move'){
       if(this.manager.isResizing){
          let offset: Point = new Point(e.clientX - this.manager.initialClick.x, e.clientY - this.manager.initialClick.y);
          console.log(offset);
          this.manager.initialClick = new Point(e.clientX, e.clientY);
          this.manager.resize(this.manager.resizeId, this.manager.resizeLocation, offset, this.initialClick);
       }else if(this.manager.isDragging){
          let offset: Point = new Point(e.clientX - this.manager.initialClick.x, e.clientY - this.manager.initialClick.y);
          console.log(offset);
          this.manager.initialClick = new Point(e.clientX, e.clientY);
          this.manager.move(offset);
       }
     }
    }
  }

  mouseUp(e: MouseEvent): void{
    if(e.button == 0){
      if(this.isMouseDown && this.mode != 'Move'){
        this.svgCursor = new Cursor("auto");
        // if(this.mode == 'Line')
        // if(this.dim[0] > 5 && this.dim[1] > 5 || this.mode == 'Line' || this.mode == 'Triangle'){
        //   if(this.manager.validShape(this.id)){
        //   this.manager.finishCreation(this.id);

        // }else{
        //   this.manager.shapes.delete(this.id);
        // }
        this.manager.finishCreation(this.id);
        this.isMouseDown = false;
        this.dim = [0,0,0,0];

      }else if(this.mode == 'Move' && this.manager.isDragging){
        this.manager.clearDragging();
      }else if(this.manager.isResizing){
        this.manager.clearResize();
      }
    }
  }

}
