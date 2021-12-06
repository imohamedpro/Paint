import { Color } from "../classes/Color";
import { Point } from "../classes/Point";
import { IDimension } from "./IDimension";

export interface IShape {

    getId(): number;
    getType(): string;
    draw(p: Point): void;
    move(newCenter: Point): void;
    resize(newDimension: IDimension): void;
    copy(): IShape;
    delete(): void;
    setFill(color: Color): void;
    setStroke(color: Color): void;
}