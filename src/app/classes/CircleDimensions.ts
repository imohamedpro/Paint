import { IDimension } from "../interfaces/IDimension";

export class CircleDimensions implements IDimension {
    radius!: number;
    getDimensions(): Object {
        return this.radius;
    }
}