package com.PaintApp.PaintAppBackend.Shapes;

public class Color {
    private int red;
    private int green;
    private int blue;
    private int alpha;

    Color(int red, int green, int blue, int alpha){
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
    }

    public String toString(){
        return "rgba(" + this.red + "," + this.green + "," + this.blue + "," + this.alpha + ")";
    }
}
