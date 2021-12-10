import { IDimension } from "../interfaces/IDimension";
import { IShape } from "../interfaces/IShape";
import { ShapeFactoryService } from "../services/ShapeFactory/shape-factory.service";
import { Point } from "./Point";
import { Color, Cursor, Dimensions, Style, FillColor, StrokeColor } from "./Style";

export abstract class Shape implements IShape {
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

     setCursor(type: string){
         this.style.cursor = new Cursor(type);
     }
    //  draw(center: Point, dimensions: Array<number>){
    //     this.center = center;
    //     this.dimensions = dimensions;
    //  }
    abstract resize(location: string, offset: Point, mouse: Point): void;

     normalizeDims(){
         this.dimensions.forEach((x) =>{
             if(x < 4){
                 x = 4;
             }
         });
     }

    draw(newDimensions: Array<number>): void{
        // for(let i = 0; i < this.dimensions.length; i++){
        //     if(this.dimensions[i] < 0 || newDimensions[i] > 10){
        //         this.dimensions[i] = newDimensions[i]
        //     }
        // }
        // console.log(newDimensions);
        this.dimensions = newDimensions;
    }
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