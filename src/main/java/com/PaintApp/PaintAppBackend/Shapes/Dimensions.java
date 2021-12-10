package com.PaintApp.PaintAppBackend.Shapes;

public class Dimensions{
    private int value;
    Dimensions(int value){
        this.value = value;
    }
    public String toString(){
        return "stroke-width" + this.value;
    }
}
