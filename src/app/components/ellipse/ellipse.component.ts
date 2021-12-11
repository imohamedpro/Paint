import { Shape } from '../../classes/Shape';
import { Component, Input, OnInit } from '@angular/core';
import { ShapeManagerService } from '../../services/ShapeManager/shape-manager.service';
import { EventHandler } from '../../classes/EventHandler';

@Component({
  selector: '[shape=ellipse]',
  templateUrl: './ellipse.component.html',
  styleUrls: ['./ellipse.component.css']
})
export class EllipseComponent implements OnInit{
  @Input() ellipse!: Shape; 
  eventHandler: EventHandler;

  constructor(manager: ShapeManagerService) { 
    this.eventHandler = new EventHandler(manager);
  }
  ngOnInit(): void {
    console.log(this.ellipse.style.toString());
  }

}
