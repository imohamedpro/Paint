import { Component, HostListener, OnInit } from '@angular/core';
import { Point } from '../../classes/Point';
import { Shape } from '../../classes/Shape';
import { Color, Dimensions, FillColor, StrokeColor } from '../../classes/Style';
import { ShapeManagerService } from '../../services/ShapeManager/shape-manager.service';

@Component({
  selector: 'app-sketch',
  templateUrl: './sketch.component.html',
  styleUrls: ['./sketch.component.css']
})
export class SketchComponent implements OnInit {
  manager: ShapeManagerService;
  ctrlC: boolean;
  ctrl: boolean;

  constructor(manager: ShapeManagerService) {
    this.manager = manager;
    this.ctrlC = false;
    this.ctrl = false;
   }

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

  ngOnInit(): void {
    this.manager.createShape('circle', new Point(100, 100), new Color(110, 100, 30, 0.5), new Color(0, 100, 30, 1), 5);
    this.manager.createShape('circle', new Point(450, 450), new Color(110, 100, 30, 0.5), new Color(0, 100, 30, 1), 5);
    this.manager.createShape('line', new Point(300, 300), new Color(110, 100, 30, 0.5), new Color(0, 100, 30, 1), 5);
    this.manager.createShape('triangle', new Point(50, 50), new Color(110, 100, 30, 0.5), new Color(0, 100, 30, 1), 5);
  }
  

}
