package com.PaintApp.PaintAppBackend.Managers;
import com.PaintApp.PaintAppBackend.Shapes.Shape;
import java.util.HashMap;
import java.util.Map;

public class Manager {

    private Map<Integer,Shape> shapes;

    Manager(Map<Integer,Shape> shapes){
        this.shapes = shapes;
    }

    public void add(Integer id, Shape shape ){
        shapes.put(id,shape);
    }

    public void delete(Integer id, Shape shape){
        shapes.remove(id,shape);
    }

    public void update(Integer id, Shape shape){
        shapes.replace(id,shape);
    }

}
