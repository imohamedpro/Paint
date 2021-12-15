import { Shape } from '../../classes/Shape';
import { Component, Input, OnInit } from '@angular/core';
import { ShapeManagerService } from '../../services/ShapeManager/shape-manager.service';
import { EventHandler } from '../../classes/EventHandler';

@Component({
  selector: '[shape=square]',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  @Input() square!: Shape;
  eventHandler: EventHandler;

  constructor(manager: ShapeManagerService) { 
    this.eventHandler = new EventHandler(manager);
  }
  ngOnInit(): void {}
}
