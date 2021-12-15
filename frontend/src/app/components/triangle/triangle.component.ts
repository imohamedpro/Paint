import { Component, Input, OnInit} from '@angular/core';
import { Shape } from '../../classes/Shape';
import { ShapeManagerService } from '../../services/ShapeManager/shape-manager.service';
import { EventHandler } from '../../classes/EventHandler';

@Component({
  selector: '[shape=triangle]',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.css']
})
export class TriangleComponent implements OnInit {
  @Input() triangle! : Shape;
  eventHandler: EventHandler;

  constructor(manager: ShapeManagerService) { 
    this.eventHandler = new EventHandler(manager);
  }

  ngOnInit(): void {}

  pointsGetter(): string {
    return `${this.triangle.center.x},${this.triangle.center.y} ${this.triangle.dimensions[0]},${this.triangle.dimensions[1]} ${this.triangle.dimensions[2]},${this.triangle.dimensions[3]}`;
  }


}

