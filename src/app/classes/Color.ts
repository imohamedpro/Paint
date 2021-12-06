
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