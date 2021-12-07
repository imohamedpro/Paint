export class Style {
    fillColor!: FillColor;
    strokeColor!: StrokeColor;
    strokeWidth!: Dimensions;
    x: number;
    toString(): string {
        let str: string = '';
        Object.values(this).forEach((value) => {
            str += `${value.toString()};`
        })
        return str;
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
}


export class FillColor extends Color {
    override toString(): string {
        return `fill: ${super.toString()}`;
    }
}

export class StrokeColor extends Color {
    override toString(): string {
        return `stroke: ${super.toString()}`;
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
}