import { Point } from "../Point";
import { PointResponse } from "./PointResponse";
import { StyleResponse } from './StyleResponse'

export class ShapeResponse {
    initialDims!: Array<number>;
    shapes!: Array<ShapeResponse>;
    type!: string;
    id!: number;
    dimensions!: Array<number>;
    center!: PointResponse;
    style!: StyleResponse;
    isSelected!: boolean;
}