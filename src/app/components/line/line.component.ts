import { Component, Input, OnInit } from '@angular/core';
import { EventHandler } from '../../classes/EventHandler';
import { Shape } from '../../classes/Shape';
import { ShapeManagerService } from '../../services/ShapeManager/shape-manager.service';


@Component({
  selector: '[shape=line]',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
  @Input() line!: Shape; 
  eventHandler: EventHandler;

  constructor(manager: ShapeManagerService) { 
    this.eventHandler = new EventHandler(manager);
  }

  ngOnInit(): void {
    console.log(this.line.style.toString());
  }
}
