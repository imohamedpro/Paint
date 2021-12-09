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
  @Input() style: Style;
  @Input() set _action(value:string){
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
   }

  ngOnInit(): void {
    this.manager.createShape('circle', new Point(100, 100), this.style.fillColor.color, this.style.strokeColor.color, this.style.strokeWidth.toNumber());
    this.manager.createShape('rectangle', new Point(300, 300), new Color(110, 100, 30, 0.5), new Color(0, 100, 30, 1), 5);
    this.manager.createShape('circle', new Point(450, 450), new Color(110, 100, 30, 0.5), new Color(0, 100, 30, 1), 5);
    this.manager.createShape('ellipse', new Point(100, 500), new Color(110, 100, 30, 0.5), new Color(0, 100, 30, 1), 5);
    this.manager.createShape('line', new Point(300, 300), new Color(110, 100, 30, 0.5), new Color(0, 100, 30, 1), 5);
    this.manager.createShape('triangle', new Point(50, 50), new Color(110, 100, 30, 0.5), new Color(0, 100, 30, 1), 5);
  }
  action: string;
  ctrlC: boolean;
  ctrl: boolean;

   @HostListener('window:keydown',['$event'])
   ctrlOrDeleteDown(event: KeyboardEvent){
     if(event.ctrlKey && event.key === 'c'){
      //  console.log("ctrl + c is done");
       this.manager.ctrlC();
       this.ctrlC = true;
     }
     else if(event.ctrlKey && event.key === 'v' && this.ctrlC){
       this.manager.paste();
     }
     else if(event.ctrlKey){
       this.ctrl = true;
      //  console.log(this.ctrl);
     }
     else if(event.key === 'Delete'){
       this.manager.delete();
      //  console.log('delete is down');
     }
   }
 
   @HostListener('window:keyup',['$event'])
   ctrlUp(event: KeyboardEvent){
     if(event.ctrlKey){
       this.ctrl = false;
      //  console.log(this.ctrl);
     }
     else if(event.key === 'c'){
       this.ctrlC = false;
     }
   }
  random():number{
    return Math.random()*800;
  }

  click():void{
    console.log(this.mode);
    console.log(this.style);
  }

}
