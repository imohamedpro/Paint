import { Shape } from '../../classes/Shape';
import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { ShapeManagerService } from '../../services/ShapeManager/shape-manager.service';
import { EventHandler } from '../../classes/EventHandler';

@Component({
  selector: '[shape=circle]',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {
  @Input() circle!: Shape; 

  eventHandler: EventHandler;

  constructor(manager: ShapeManagerService) { 
    this.eventHandler = new EventHandler(manager);
  }

  ngOnInit(): void {
    console.log(this.circle.style.toString());
  }
}
