import { Shape } from '../../classes/Shape';
import { Component, Input, OnInit } from '@angular/core';
import { ShapeManagerService } from '../../services/ShapeManager/shape-manager.service';
import { EventHandler } from '../../classes/EventHandler';

@Component({
  selector: '[shape=rectangle]',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit{
  @Input() rectangle!: Shape; 
  eventHandler: EventHandler;

  constructor(manager: ShapeManagerService) { 
    this.eventHandler = new EventHandler(manager);
  }

  ngOnInit(): void {
    console.log(this.rectangle.style.toString());
  }
}
