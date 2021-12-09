import { Component, Input, OnInit } from '@angular/core';
import { Point } from '../../classes/Point';
import { SelectionB } from '../../classes/Selection';

@Component({
  selector: '[resizer]',
  templateUrl: './resizer.component.html',
  styleUrls: ['./resizer.component.css']
})
export class ResizerComponent implements OnInit {
  // @Input() function;
  // selected!: SelectionB;
  @Input() x!: number;
  @Input() y!: number;
  constructor() { 
    // console.log(this.x + ' ' + this.y);

  }

  ngOnInit(): void {
    // this.selected = new SelectionB();
    console.log(this.x + " " + this.y);
  }

}
