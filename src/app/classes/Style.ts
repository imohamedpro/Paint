export class Style {
    fillColor!: FillColor;
    strokeColor!: StrokeColor;
    strokeWidth!: Dimensions;
    cursor!: Cursor;
    toString(): string {
        let str: string = '';
        Object.values(this).forEach((value) => {
            str += `${value.toString()};`
        })
        // console.log(str);
        return str;
    }
    copy(): Style{
        let clone = new Style();
        clone.fillColor = this.fillColor.copy();
        clone.strokeColor = this.strokeColor.copy();
        clone.strokeWidth = this.strokeWidth.copy();
        return clone;
    }
}

export class Color {
    red: number;
    green: number;
    blue: number;
    alpha: number;
    constructor(red: number,
                green: number,
                blue: number,
                alpha: number)
        {
            this.red = red;
            this.green = green;
            this.blue = blue;
            this.alpha = alpha;
        }
    toString(): string{
        return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
    }
    copy(): Color{
        return new Color(this.red, this. green, this.blue, this.alpha);
    }
}

export class Cursor {
    type: string;
    constructor(type: string){
        this.type = type
    }
    toString(): string{
        return `cursor: ${this.type}`
    }
}

// export class FillColor extends Color {
//     override toString(): string {
//         return `fill: ${super.toString()}`;
//     }
// }


export class FillColor{
    color: Color;
    constructor(color: Color){
        this.color = color;
    }
    toString(): string {
        return `fill: ${this.color.toString()}`;
    }
    copy(): FillColor {
        return new FillColor(this.color.copy());
    }
}

export class StrokeColor{
    color: Color;
    constructor(color: Color){
        this.color = color;
    }
    toString(): string {
        return `stroke: ${this.color.toString()}`;
    }
    copy(): StrokeColor{
        return new StrokeColor(this.color.copy());
    }
}

export class Dimensions {
    value: number;
    constructor(value: number){
        this.value = value;
    }
    toString(){
        return `stroke-width: ${this.value}px`;
    }
    toNumber(){
        return this.value;
    }
    copy(): Dimensions{
        return new Dimensions(this.value);
    }
}