import { Component, Input, OnInit } from '@angular/core';
import { Shape } from '../../classes/Shape';
import { UserDefined } from '../../classes/UserDefined';

@Component({
  selector: '[shape = userDefined]',
  templateUrl: './user-defined.component.html',
  styleUrls: ['./user-defined.component.css']
})
export class UserDefinedComponent implements OnInit {
  @Input() shape!: UserDefined;
  constructor() { }

  ngOnInit(): void {
  }
  getScaleX(): number{
    return this.shape.dimensions[0] / this.shape.initilaDims[0];
  }
  getScaleY(): number{
    return this.shape.dimensions[1] / this.shape.initilaDims[1];
  }
  pointsGetter(shape: Shape): string {
    return `${shape.center.x},${shape.center.y} ${shape.dimensions[0]},${shape.dimensions[1]} ${shape.dimensions[2]},${shape.dimensions[3]}`;
  }
}
