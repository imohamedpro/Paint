import { Component, Input, OnInit } from '@angular/core';
import { Point } from '../../classes/Point';
import { Resizer, ResizerFactory } from '../../classes/Resizers';
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
  resizers!: Resizer;
  
  constructor() {}

  ngOnInit(): void {
    this.selected = SelectionFactory.getSelection(this.type);
    this.resizers = new ResizerFactory().getResizer(this.type);
  }
  getResizer(location: string){
    let result: number = 0;
    switch(location){
      case 'NWx':
        result = this.selected.resizeNWx(this.center, this.dimensions);
        break;
      case 'NWy':
        result = this.selected.resizeNWy(this.center, this.dimensions);
        break;
      case 'Nx':
        result = this.selected.resizeNx(this.center, this.dimensions);
        break;
      case 'Ny':
        result = this.selected.resizeNy(this.center, this.dimensions);
        break;
      case 'NEx':
        result = this.selected.resizeNEx(this.center, this.dimensions);
        break;
      case 'NEy':
        result = this.selected.resizeNEy(this.center, this.dimensions);
        break;
      case 'Wx':
        result = this.selected.resizeWx(this.center, this.dimensions);
        break;
      case 'Wy':
        result = this.selected.resizeWy(this.center, this.dimensions);
        break;
      case 'Ex':
        result = this.selected.resizeEx(this.center, this.dimensions);
        break;
      case 'Ey':
        result = this.selected.resizeEy(this.center, this.dimensions);
        break;
      case 'SWx':
        result = this.selected.resizeSWx(this.center, this.dimensions);
        break;
      case 'SWy':
        result = this.selected.resizeSWy(this.center, this.dimensions);
        break;
      case 'Sx':
        result = this.selected.resizeSx(this.center, this.dimensions);
        break;
      case 'Sy':
        result = this.selected.resizeSy(this.center, this.dimensions);
        break;
      case 'SEx':
        result = this.selected.resizeSEx(this.center, this.dimensions);
        break;
      case 'SEy':
        result = this.selected.resizeSWy(this.center, this.dimensions);
        break;
      case 'v1x':
        result = this.center.x;
        break;
      case 'v1y':
        result = this.center.y;
        break;
      case 'v2x':
        result = this.dimensions[0];
        break;
      case 'v2y':
        result = this.dimensions[1];
        break;
      case 'v3x':
        result = this.dimensions[2];
        break;
      case 'v3y':
        result = this.dimensions[3];
        break;

    }
    return result;
  }
}
