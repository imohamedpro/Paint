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

    static getDistance(p1: Point, p2: Point): number{
        let dx = p2.x - p1.x;
        let dy = p2.y - p1.y;
        return Math.sqrt(dx*dx + dy*dy);
    }
}