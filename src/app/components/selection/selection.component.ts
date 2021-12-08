import { Component, Input, OnInit } from '@angular/core';
import { Shape } from '../../classes/Shape';

@Component({
  selector: '[shape=selection]',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {
  @Input() selected: Shape;
  constructor() { }

  ngOnInit(): void {
  }

}
