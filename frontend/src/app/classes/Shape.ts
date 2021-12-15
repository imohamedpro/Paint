import { ShapeFactoryService } from "../services/ShapeFactory/shape-factory.service";
import { Point } from "./Point";
import { Color, Cursor, Dimensions, Style, FillColor, StrokeColor } from "./Style";

export abstract class Shape{
    initialDims!: Array<number>;
    shapes!: Array<Shape>;
    type: string;
    id: number;
    dimensions!: Array<number>;
    center!: Point;
    style!: Style;
    isSelected: boolean;
    constructor(type: string, id: number, center: Point){
        this.id = id;
        this.type = type;
        this.center = center;
        this.isSelected = false;
        this.style = new Style();
    }
    getId(): number {
        return this.id;
    }
    getType(): string {
        return this.type;
    }
    move(offset: Point): void {
        this.center.shift(offset);
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
    abstract resize(location: string, offset: Point): void;

     normalizeDims(){
         this.dimensions.forEach((x) =>{
             if(x < 4){
                 x = 4;
             }
         });
     }

    draw(newDimensions: Array<number>): void{
        this.dimensions = newDimensions;
    }
    copy(): Shape{
        let clone = new ShapeFactoryService().createShape(this.type.toLowerCase(), this.id, this.center.copy());
        clone.style = this.style.copy();
        clone.dimensions = new Array<number>();
        this.dimensions.forEach((x)=>{
            clone.dimensions.push(x);
        });
        return clone;
    };

    abstract getMinX(): number;
    abstract getMinY(): number;
    abstract getMaxX(): number;
    abstract getMaxY(): number;
    setCenter(newCenter: Point): void{
        this.center = newCenter;
    }
}