package com.PaintApp.PaintAppBackend.model.shape;

import java.util.ArrayList;

public class ArrayListShape {
    private ArrayList<Shape> arrayList;

    public ArrayListShape() {
        this.arrayList = new ArrayList<Shape>();
    }

    public ArrayList<Shape> getArrayList() {
        return arrayList;
    }

    public void setArrayList(ArrayList<Shape> arrayList) {
        this.arrayList = arrayList;
    }

    public void add(Shape shape){
        this.arrayList.add(shape);
    }

    public Shape get(int i){
        return this.arrayList.get(i);
    }

    public int size(){
        return this.arrayList.size();
    }
}
