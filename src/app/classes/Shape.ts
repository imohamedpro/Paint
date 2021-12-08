import { IDimension } from "../interfaces/IDimension";
import { IShape } from "../interfaces/IShape";
import { Point } from "./Point";
import { Color, Cursor, Dimensions, Style } from "./Style";

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

     setCursor(type: string){
         this.style.cursor = new Cursor(type);
     }

    resize(newCenter: Point, newDimensions: Array<number>): void{
        this.center = newCenter;
        this.dimensions = newDimensions;
     }

    abstract draw(p: Point): void;
    abstract copy(): IShape;
    abstract delete(): void;

    // click(): void{
    //     this.isSelected = !this.isSelected;
    //     console.log(this.id + " selected: " + this.isSelected);
    // }

    // clickMove(e: MouseEvent): void{
    //     if(this.isSelected && e.which == 1){
    //      e.stopPropagation();
    //      //console.log(e);
    //      let offsetX = this.center.x + e.movementX;
    //      let offsetY = this.center.y + e.movementY;
    //      this.move(new Point(offsetX, offsetY));
    //     }
    //  }

    //  getBorderVisibility(){
    //     if(this.isSelected){
    //         return "visible";
    //     }
    //     else{
    //         return "hidden";
    //     }
    // }

    // clickUpperLeftCorner(){
    //     this.isUpperLeftCornerClicked = true;
    //     console.log("mousedown");
    // }

    // moveUpperLeftCorner(e: MouseEvent){
    //     if(this.isUpperLeftCornerClicked && this.isSelected && e.which == 1){
    //         e.stopPropagation();
    //         let newCenter = new Point(this.center.x + e.movementX, this.center.y + e.movementY);
    //         let newDimensions = [this.dimensions[0] - e.movementY, this.dimensions[1] - e.movementX];
    //         this.resize(newCenter, newDimensions);
    //         console.log(e.movementX + "  " + e.movementY)
    //     }
    // }

    // mouseUp(){
    //     this.isUpperLeftCornerClicked = false;
    //     console.log("mouseup");
    // }

}