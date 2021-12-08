import { Component, Input, OnInit } from '@angular/core';
import { Shape } from 'src/app/classes/Shape';


@Component({
  selector: '[shape=line]',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
  @Input() line! :Shape;
  constructor() { }

  ngOnInit(): void {
  }

  



}
