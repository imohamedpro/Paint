import { IDimension } from "../interfaces/IDimension";
import { IShape } from "../interfaces/IShape";
import { Point } from "./Point";
import { Color, Dimensions, Style } from "./Style";

export abstract class Shape implements IShape {
    readonly type: string;
    readonly id: number;
    dimensions!: Array<number>;
    center!: Point;
    style!: Style;
    // fill!: Color;
    // stroke!: Color;
    // strokeWidth!: number;
    isSelected: boolean;
    constructor(type: string, id: number, center: Point){
        this.id = id;
        this.type = type;
        this.center = center;
        this.isSelected = false;
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
        this.style.fillColor = color;
     }

     setStroke(color: Color): void {
         this.style.strokeColor = color;
     }

     setStrokeWidth(width: number): void {
        this.style.strokeWidth = new Dimensions(width);
     }

    resize(newCenter: Point, newDimensions: Array<number>): void{
        this.center = newCenter;
        this.dimensions = newDimensions;
     }

    abstract draw(p: Point): void;
    abstract copy(): IShape;
    abstract delete(): void;


}