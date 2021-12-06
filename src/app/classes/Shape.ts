import { IDimension } from "../interfaces/IDimension";
import { IShape } from "../interfaces/IShape";
import { Color } from "./Color";
import { Point } from "./Point";

export abstract class Shape implements IShape {
    readonly type: string;
    readonly id: number;
    dimensions!: Array<number>;
    center!: Point;
    fill!: Color;
    stroke!: Color;
    isSelected: boolean;
    constructor(type: string, id: number){
        this.id = id;
        this.type = type;
        this.isSelected = false;
    }
    getId(): number {
        return this.id;
    }
    getType(): string {
        return this.type;
    }

    move(newCenter: Point): void {
        this.center = newCenter;
    }

    setFill(color: Color): void {
        this.fill = color;
     }

     setStroke(color: Color): void {
         this.stroke = color;
     }

    resize(newCenter: Point, newDimensions: Array<number>): void{
        this.center = newCenter;
        this.dimensions = newDimensions;
     }

    abstract draw(p: Point): void;
    abstract copy(): IShape;
    abstract delete(): void;


}