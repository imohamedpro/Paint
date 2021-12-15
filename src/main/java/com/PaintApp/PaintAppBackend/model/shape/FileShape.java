package com.PaintApp.PaintAppBackend.model.shape;

import java.util.ArrayList;

public class FileShape {
    private ArrayList<Shape> shapes;
    private ArrayList<ArrayListShape> customShapes;

    public ArrayList<Shape> getShapes() {
        return shapes;
    }

    public void setShapes(ArrayList<Shape> shapes) {
        this.shapes = shapes;
    }

    public ArrayList<ArrayListShape> getCustomShapes() {
        return customShapes;
    }

    public void setCustomShapes(ArrayList<ArrayListShape> customShapes) {
        this.customShapes = customShapes;
    }
}
