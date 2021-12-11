package com.PaintApp.PaintAppBackend.model.shape;
import com.PaintApp.PaintAppBackend.model.utility.Point;
import com.PaintApp.PaintAppBackend.model.style.Style;

public class Shape {
    private int id;
    private String type;
    private Point center;
    private boolean isSelected;
    private Style style;
    private Integer[] dimensions;
    private Shape[] shapes = {};
    private int[] initialDims = {};

    public Shape[] getShapes() {
        return shapes;
    }

    public void setShapes(Shape[] shapes) {
        this.shapes = shapes;
    }

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

    public int[] getInitialDims() {
        return initialDims;
    }

    public void setInitialDims(int[] initialDims) {
        this.initialDims = initialDims;
    }

    //For testing purpose
    public String toString(){
        String str = "id = " + this.id + "\n" + "type = " + this.type + "\n";
        return str;
    }

}
