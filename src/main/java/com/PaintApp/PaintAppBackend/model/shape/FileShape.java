package com.PaintApp.PaintAppBackend.model.shape;

import java.util.ArrayList;

public class FileShape {
    private ArrayList<Shape> shapes;
    private ArrayList<Shape[]> customShapes;

    public ArrayList<Shape> getShapes() {
        return shapes;
    }

    public void setShapes(ArrayList<Shape> shapes) {
        this.shapes = shapes;
    }

    public ArrayList<Shape[]> getCustomShapes() {
        return customShapes;
    }

    public void setCustomShapes(ArrayList<Shape[]> customShapes) {
        this.customShapes = customShapes;
    }
}
