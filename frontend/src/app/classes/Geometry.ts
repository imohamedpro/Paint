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
    static getDirections(location: string, offset: Point): Point{
        let dx = 1, dy = 1;
        switch(location){
            case 'NW':
                dx = -1;
                dy = -1;
                break;
            case 'N':
                dx = 0;
                dy = -1;
                break;
            case 'NE':
                dy = -1;
                break;
            case 'E':
                dy = 0;
                break;
            case 'S':
                dx = 0;
                break;
            case 'SW':
                dx = -1;
                break;
            case 'W':
                dx = -1;
                dy = 0;
        }
        return new Point(offset.x * dx, offset.y * dy);
    }
}