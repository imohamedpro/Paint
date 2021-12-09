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
        result = (this.selected.resizeNWx(this.center, this.dimensions)
                  + this.selected.resizeNEx(this.center, this.dimensions)) / 2;
        break;
      case 'Ny':
        result = (this.selected.resizeNWy(this.center, this.dimensions)
                    + this.selected.resizeNEy(this.center, this.dimensions)) / 2;
        break;
      case 'NEx':
        result = this.selected.resizeNEx(this.center, this.dimensions);
        break;
      case 'NEy':
        result = this.selected.resizeNEy(this.center, this.dimensions);
        break;
      case 'Wx':
        result = (this.selected.resizeNWx(this.center, this.dimensions)
                  + this.selected.resizeSWx(this.center, this.dimensions)) / 2;
        break;
      case 'Wy':
        result = (this.selected.resizeNWy(this.center, this.dimensions)
                  + this.selected.resizeSWy(this.center, this.dimensions)) / 2;
        break;
      case 'Ex':
        result = (this.selected.resizeNEx(this.center, this.dimensions)
                  + this.selected.resizeSEx(this.center, this.dimensions)) / 2;
        break;
      case 'Ey':
        result = (this.selected.resizeNEy(this.center, this.dimensions)
                  + this.selected.resizeSEy(this.center, this.dimensions)) / 2;
        break;
      case 'SWx':
        result = this.selected.resizeSWx(this.center, this.dimensions);
        break;
      case 'SWy':
        result = this.selected.resizeSWy(this.center, this.dimensions);
        break;
      case 'Sx':
        result = (this.selected.resizeSEx(this.center, this.dimensions)
                  + this.selected.resizeSWx(this.center, this.dimensions)) / 2;
        break;
      case 'Sy':
        result = (this.selected.resizeSEy(this.center, this.dimensions)
                  + this.selected.resizeSWy(this.center, this.dimensions)) / 2;
        break;
      case 'SEx':
        result = this.selected.resizeSEx(this.center, this.dimensions);
        break;
      case 'SEy':
        result = this.selected.resizeSWy(this.center, this.dimensions);
        break;
      case 'ax':
        result = this.dimensions[0];
        break;
      case 'ay':
        result = this.dimensions[1];
        break;
      case 'bx':
        result = this.dimensions[2];
        break;
      case 'by':
        result = this.dimensions[3];
        break;
      case 'cx':
        result = this.dimensions[4];
        break;
      case 'cy':
        result = this.dimensions[5];
        break;

    }
    return result;
  }
}
