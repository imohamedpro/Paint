package com.PaintApp.PaintAppBackend.Shapes;

public class Point {
    public int x;
    public int y;
    Point(int x, int y){
        this.x = x;
        this.y = y;
    }
    void shift(Point p){
        this.x += p.x;
        this.y += p.y;
    }
}
