import { Component, Input, OnInit } from '@angular/core';
import { Point } from '../../classes/Point';
import { Shape } from '../../classes/Shape';
import { Dimensions, FillColor, StrokeColor, Style } from '../../classes/Style';
import { ShapeManagerService } from '../../services/ShapeManager/shape-manager.service';

@Component({
  selector: 'app-sketch',
  templateUrl: './sketch.component.html',
  styleUrls: ['./sketch.component.css']
})
export class SketchComponent implements OnInit {
  manager: ShapeManagerService;
  @Input() action:string;
  @Input() style: Style;
  constructor(manager: ShapeManagerService) {
    this.manager = manager;
    this.action = "move";
    this.style = new Style();
   }

  ngOnInit(): void {
    this.manager.createShape('circle', new Point(100, 100), this.style.fillColor, this.style.strokeColor, this.style.strokeWidth.toNumber());
    this.manager.createShape('rectangle', new Point(300, 300), new FillColor(110, 100, 30, 0.5), new StrokeColor(0, 100, 30, 1), 5);
    this.manager.createShape('circle', new Point(450, 450), new FillColor(110, 100, 30, 0.5), new StrokeColor(0, 100, 30, 1), 5);
    this.manager.createShape('ellipse', new Point(100, 500), new FillColor(110, 100, 30, 0.5), new StrokeColor(0, 100, 30, 1), 5);
    this.manager.createShape('line', new Point(300, 300), new FillColor(110, 100, 30, 0.5), new StrokeColor(0, 100, 30, 1), 5);
    this.manager.createShape('triangle', new Point(50, 50), new FillColor(110, 100, 30, 0.5), new StrokeColor(0, 100, 30, 1), 5);
  }
  random():number{
    return Math.random()*800;
  }

  click():void{
    console.log(this.action);
    console.log(this.style);
  }

}
