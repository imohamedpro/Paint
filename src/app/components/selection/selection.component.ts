import { Component, Input, OnInit } from '@angular/core';
import { Point } from '../../classes/Point';
import { Selection, SelectionFactory } from '../../classes/Selection';
import { Shape } from '../../classes/Shape';

@Component({
  selector: '[shape=selection]',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {
  @Input() center!: Point;
  @Input() dimensions!: Array<number>;
  @Input() type!: string;
  selected!: Selection;
  constructor() {
    // console.log(this.type);


  }

  ngOnInit(): void {
    // console.log(this);
    this.selected = SelectionFactory.getSelection(this.type);

  }

}
