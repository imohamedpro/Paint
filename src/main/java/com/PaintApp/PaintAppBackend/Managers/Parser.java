package com.PaintApp.PaintAppBackend.Managers;
import com.PaintApp.PaintAppBackend.Shapes.Shape;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class Parser {
    private Shape shape;
    private Integer id;
    private ObjectMapper obj;

    public Parser(Integer id, Shape shape, ObjectMapper obj){
        this.shape = shape;
        this.id = id;
        this.obj = obj;
    }

    public void parsing(String jsonStr) throws JsonProcessingException {
        this.shape = this.obj.readValue(jsonStr, Shape.class);
        this.id = this.obj.readValue(jsonStr, Integer.class);
    }

    public Shape getShape(){
        return this.shape;
    }

    public Integer getId(){
        return this.id;
    }
}
