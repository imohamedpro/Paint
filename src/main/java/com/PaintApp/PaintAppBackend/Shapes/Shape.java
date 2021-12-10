package com.PaintApp.PaintAppBackend.Shapes;
import com.PaintApp.PaintAppBackend.Interfaces.IShape;
import com.PaintApp.PaintAppBackend.Styles.*;
import com.PaintApp.PaintAppBackend.Utilities.Point;

public class Shape implements IShape {
    public String type;
    public int id;
    public int[] dimensions;
    public Point center;
    public Style style;
    public boolean isSelected;

    public Shape(String type, int id, Point center){
        this.type = type;
        this.id = id;
        this.center = center;
        this.isSelected = false;
    }

}
