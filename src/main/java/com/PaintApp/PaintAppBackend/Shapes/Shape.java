package com.PaintApp.PaintAppBackend.Shapes;
import com.PaintApp.PaintAppBackend.Interfaces.IShape;
import com.PaintApp.PaintAppBackend.Styles.*;
import com.PaintApp.PaintAppBackend.Utilities.Point;

public class Shape implements IShape {
    private int id;
    private String type;
    private Point center;
    private boolean isSelected;
    private Style style;
    private Integer[] dimensions;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Point getCenter() {
        return center;
    }

    public void setCenter(Point center) {
        this.center = center;
    }

    public boolean getIsSelected() {
        return isSelected;
    }

    public void setIsSelected(boolean selected) {
        isSelected = selected;
    }

    public Style getStyle() {
        return style;
    }

    public void setStyle(Style style) {
        this.style = style;
    }

    public Integer[] getDimensions() {
        return dimensions;
    }

    public void setDimensions(Integer[] dimensions) {
        this.dimensions = dimensions;
    }

    //For testing purpose
    public String toString(){
        String str = "id = " + this.id + "\n" + "type = " + this.type + "\n";
        return str;
    }

}
