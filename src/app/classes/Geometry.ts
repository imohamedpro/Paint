import { Point } from "./Point";

export class Geometry {
    static getCenter(points: Point[]): Point{
        let x = 0;
        let y = 0;
        points.forEach((p)=>{
            x += p.x;
            y += p.y;
        })
        return new Point(x / points.length, y / points.length);
    }
    static Pythagoras(x: number, y: number){
        return Math.sqrt(x*x + y*y);
    }
    static getDistance(p1: Point, p2: Point): number{
        let dx = p2.x - p1.x;
        let dy = p2.y - p1.y;
        return this.Pythagoras(dx, dy);
    }
    static helper(dimensions: Array<number>): Array<number>{
        return [this.Pythagoras(dimensions[0], dimensions[1]), Math.atan(dimensions[1] / dimensions[0])];
    }
    static getXComponent(dimensions: Array<number>): number{
        let [magnitude, angle] =  this.helper(dimensions);
        return magnitude * Math.cos(angle);
    }
    static getYComponent(dimensions: Array<number>): number{
        let [magnitude, angle] =  this.helper(dimensions);
        return magnitude * Math.sin(angle);
    }
}