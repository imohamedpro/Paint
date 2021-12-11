import { Component, Input, OnInit } from '@angular/core';
import { EventHandler } from '../../classes/EventHandler';
import { Shape } from '../../classes/Shape';
import { ShapeManagerService } from '../../services/ShapeManager/shape-manager.service';

@Component({
  selector: '[shape=userDefined]',
  templateUrl: './user-defined.component.html',
  styleUrls: ['./user-defined.component.css']
})
export class UserDefinedComponent implements OnInit {
  @Input('custom') shape!: any;
  eventHandler: EventHandler;

  constructor(manager: ShapeManagerService) { 
    this.eventHandler = new EventHandler(manager);
  }

  ngOnInit(): void {
    console.log(this.shape);
  }
  getScaleX(): number{
    return this.shape.dimensions[0] / this.shape.initialDims[0];
  }
  getScaleY(): number{
    return this.shape.dimensions[1] / this.shape.initialDims[1];
  }
  pointsGetter(shape: Shape): string {
    return `${shape.center.x},${shape.center.y} ${shape.dimensions[0]},${shape.dimensions[1]} ${shape.dimensions[2]},${shape.dimensions[3]}`;
  }
}
