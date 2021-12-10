package com.PaintApp.PaintAppBackend.Shapes;

public class Style {
    public FillColor fillColor;
    public StrokeColor strokeColor;
    public Dimensions strokeWidth;
    public String toString(){
        String str = "";
        return fillColor.toString() + strokeColor.toString() + strokeWidth.toString();
    }
}









