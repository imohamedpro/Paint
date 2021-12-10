package com.PaintApp.PaintAppBackend.Shapes;
import com.PaintApp.PaintAppBackend.Interfaces.IShape;
import java.util.Arrays;

public class Shape implements IShape {
    private String type;
    private int id;
    public int[] dimensions;
    public Point center;
    public Style style;
    public boolean isSelected;

    Shape(String type, int id, Point center){
        this.type = type;
        this.id = id;
        this.center = center;
        this.isSelected = false;
    }

    public int getId(){
        return this.id;
    }

    public String getType(){
        return this.type;
    }

    public void move(Point Offset){
        this.center.shift(Offset);
    }

    public void setFill(Color color){
        this.style.fillColor = color;
    }

    public void setStroke(Color color){
        this.style.strokeColor = color;
    }

    public void setStrokeWidth(int width){
        this.style.strokeWidth = new Dimensions(width);
    }

    public void resize(Point newCenter, int[] newDimensions){
        this.center = center;
        this.dimensions = Arrays.copyOf(newDimensions,newDimensions.length);
    }

}
