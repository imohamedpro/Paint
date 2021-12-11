export class StyleResponse {
    cursor!: CursorResponse;
    fillColor!: FillColorResponse;
    strokeColor!: StrokeColorResponse;
    strokeWidth!: DimensionsResponse;
}

export class CursorResponse{
    type!: string
}
export class ColorResponse {
    hex!: string
}
export class FillColorResponse {
    color!: ColorResponse;
}
export class StrokeColorResponse {
    color!: ColorResponse;
}
export class DimensionsResponse{
    value!:number;
}