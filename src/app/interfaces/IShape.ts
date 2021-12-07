import { Point } from "../classes/Point";
import { Color } from "../classes/Style";
import { IDimension } from "./IDimension";

export interface IShape {

    getId(): number;
    getType(): string;
    draw(p: Point): void;
    move(newCenter: Point): void;
    resize(newCenter: Point, newDimensions: Array<number>): void;
    copy(): IShape;
    delete(): void;
    setFill(color: Color): void;
    setStroke(color: Color): void;
}