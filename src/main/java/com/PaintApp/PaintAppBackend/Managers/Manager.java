package com.PaintApp.PaintAppBackend.Managers;
import com.PaintApp.PaintAppBackend.Shapes.Shape;
import com.fasterxml.jackson.core.JsonProcessingException;
import java.util.Map;

public class Manager {
    final Map<Integer,Shape> shapes;
    final Parser parser;
    private Shape[] shape;
    private Integer[] id;


    Manager(Map<Integer,Shape> shapes,Parser parser){
        this.shapes = shapes;
        this.parser = parser;
    }

    private void setIdAndShape(){
        this.id = this.parser.getIds();
        this.shape = this.parser.getShapes();
    }
    //JSON file should be sent here; a string containing an array of shapes and an array of ids
    public void add(String str) throws JsonProcessingException {
        this.parser.parsing(str);
        this.setIdAndShape();
        for(int i=0 ; i < id.length ; ++i){
            shapes.put(id[i],shape[i]);
        }
    }
    //JSON file should be sent here; a string containing an array of shapes and an array of ids
    public void delete(String str) throws JsonProcessingException {
        this.parser.parsing(str);
        this.setIdAndShape();
        for(int i=0; i < id.length ; ++i){
            shapes.remove(id[i],shape[i]);
        }
    }
    //JSON file should be sent here; a string containing an array of shapes and an array of ids
    public void update(String str) throws JsonProcessingException {
        this.parser.parsing(str);
        this.setIdAndShape();
        for(int i=0; i < id.length ; ++i){
            shapes.replace(id[i], shape[i]);
        }
    }
}
