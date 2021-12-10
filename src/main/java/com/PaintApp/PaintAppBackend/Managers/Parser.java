package com.PaintApp.PaintAppBackend.Managers;
import com.PaintApp.PaintAppBackend.Shapes.Shape;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class Parser {
    private ObjectMapper obj;
    private Integer[] id;
    private Shape[] shape;

    public Parser(Integer[] id, Shape[] shape, ObjectMapper obj){
        this.shape = shape;
        this.id = id;
        this.obj = obj;
    }

    public void parsing(String jsonStr) throws JsonProcessingException {
        this.shape = this.obj.readValue(jsonStr, Shape[].class);
        this.id = this.obj.readValue(jsonStr, Integer[].class);
    }

    public Shape[] getShapes(){
        return this.shape;
    }

    public Integer[] getIds(){
        return this.id;
    }
}
