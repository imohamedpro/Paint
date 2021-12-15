import { Ellipse } from './../../classes/Ellipse';
import { Rectangle } from './../../classes/Rectangle';
import { Injectable } from '@angular/core';
import { Line } from '../../classes/Line';
import { Triangle } from '../../classes/Triangle';
import { Square } from '../../classes/Square';
import { Circle } from '../../classes/Circle';
import { Point } from '../../classes/Point';
import { Shape } from '../../classes/Shape';
import { IShape } from '../../interfaces/IShape';
import { UserDefined } from '../../classes/UserDefined';
import { Color, Cursor, Dimensions, FillColor, StrokeColor, Style } from '../../classes/Style';
import { ShapeResponse } from '../../classes/Responses/ShapeResponse';

@Injectable({
  providedIn: 'root'
})
export class ShapeFactoryService {

  constructor() { }
  createShape(type: string, id: number, center: Point): Shape{
    let shape: Shape = new Square(id, center);
    switch (type){
      case 'circle':
        shape =  new Circle(id, center);
        break;
      case 'rectangle':
        shape = new Rectangle(id, center);
        break;
      case 'ellipse':
        shape = new Ellipse(id, center);
        break;
      case 'line':
        shape = new Line(id,center);
        break;
      case 'triangle':
        shape = new Triangle(id, center);
        break;

      case 'square':
        shape = new Square(id, center);
        break;  
      case 'userdefined':
        shape = new UserDefined(id, center);
        break;
      }
      

    return shape;
  }
  loadShape(obj: ShapeResponse): Shape{
    let shape: Shape = this.createShape(obj.type, obj.id, new Point(obj.center.x, obj.center.y));
    shape.dimensions = obj.dimensions;
    shape.style = new Style();
    console.log(obj.style.fillColor.color.hex);
    shape.style.fillColor = new FillColor(new Color(obj.style.fillColor.color.hex));
    // shape.style.fillColor.color = new Color(obj.style.fillColor.color.hex);
    shape.style.strokeColor = new StrokeColor(new Color(obj.style.strokeColor.color.hex));
    shape.style.strokeWidth = new Dimensions(obj.style.strokeWidth.value);
    shape.style.cursor = new Cursor(obj.style.cursor.type);
    console.log(shape.style.toString());

    return shape;
  }
}
