import { IDimension } from "../interfaces/IDimension";
import { IShape } from "../interfaces/IShape";
import { ShapeFactoryService } from "../services/ShapeFactory/shape-factory.service";
import { Point } from "./Point";
import { Color, Dimensions, FillColor, StrokeColor, Style } from "./Style";

export class Shape implements IShape {
    type: string;
    id: number;
    dimensions!: Array<number>;
    center!: Point;
    style!: Style;
    // clone!: Shape;
    // fill!: Color;
    // stroke!: Color;
    // strokeWidth!: number;
    isSelected: boolean;
    constructor(type: string, id: number, center: Point){
        this.id = id;
        this.type = type;
        this.center = center;
        this.isSelected = false;
        //this.clone = new Shape(type, id, center);
    }
    getId(): number {
        return this.id;
    }
    getType(): string {
        return this.type;
    }
    move(offset: Point): void {
        this.center.shift(offset);
        // this.center = offset;
        // console.log(this.center);

    }

    setFill(color: Color): void {
        this.style.fillColor = new FillColor(color);
     }

    setStroke(color: Color): void {
         this.style.strokeColor = new StrokeColor(color);
     }

     setStrokeWidth(width: number): void {
        this.style.strokeWidth = new Dimensions(width);
     }

    resize(newCenter: Point, newDimensions: Array<number>): void{
        this.center = newCenter;
        this.dimensions = newDimensions;
     }

    //abstract draw(p: Point): void;
    copy(): Shape{
        let clone = new ShapeFactoryService().createShape(this.type, this.id, this.center.copy());
        clone.style = this.style.copy();
        // console.log(clone.style);
        // clone.dimensions = Object.assign([], this.dimensions);
        clone.dimensions = new Array<number>();
        this.dimensions.forEach((x)=>{
            clone.dimensions.push(x);
        });
        return clone;
    };
    //abstract delete(): void;


}