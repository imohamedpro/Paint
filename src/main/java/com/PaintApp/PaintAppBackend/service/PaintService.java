package com.PaintApp.PaintAppBackend.service;

import com.PaintApp.PaintAppBackend.model.shape.BooleanShape;
import com.PaintApp.PaintAppBackend.model.shape.FileShape;
import com.PaintApp.PaintAppBackend.model.shape.UndoShape;
import com.PaintApp.PaintAppBackend.model.shape.Shape;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.*;

@Service
public class PaintService {
    private Map<Integer, Shape> shapes = new HashMap<Integer, Shape>();
    private Map<Integer, Shape[]> customShapes = new HashMap<>();
    private Stack<UndoShape> undo = new Stack<UndoShape>();
    private Stack<UndoShape> redo = new Stack<UndoShape>();
    private FileParser fileParser = new FileParser();

    public void add(Shape[] addedShapes){
        for(int i = 0; i < addedShapes.length; i++){
            int id = addedShapes[i].getId();
            UndoShape undoShape;
            if(this.shapes.containsKey(id)){
                undoShape = new UndoShape(this.shapes.get(id), addedShapes[i], false, false, true);
            }else{
                undoShape = new UndoShape(addedShapes[i], addedShapes[i], false, true, false);
            }
            this.shapes.put(id, addedShapes[i]);
            undo.push(undoShape);
        }
    }

    public void add(ArrayList<Shape> addedShapes){
        for(int i = 0; i < addedShapes.size(); i++){
            int id = addedShapes.get(i).getId();
            UndoShape undoShape;
            if(this.shapes.containsKey(id)){
                undoShape = new UndoShape(this.shapes.get(id), addedShapes.get(i), false, false, true);
            }else{
                undoShape = new UndoShape(addedShapes.get(i), addedShapes.get(i), false, true, false);
            }
            this.shapes.put(id, addedShapes.get(i));
            undo.push(undoShape);
        }
    }

    public void addCustomShapes(Shape[] addedShape){
        this.customShapes.put(this.customShapes.size()+1, addedShape);
    }

    public void addCustomShapesList(ArrayList<Shape[]> addedShapes){
        for(int i = 0; i < addedShapes.size(); i++){
            this.customShapes.put(this.customShapes.size()+1, addedShapes.get(i));
        }
    }

    public void delete(int[] ids){
        for(int i = 0; i < ids.length; i++){
            Shape deletedShape = this.shapes.get(ids[i]);
            this.shapes.remove(ids[i]);
            UndoShape undoShape = new UndoShape(deletedShape, deletedShape,true, false, false);
            this.undo.push(undoShape);
        }
    }

    public BooleanShape undo(){
        BooleanShape response = new BooleanShape(null, false, false, false);
        try{
            UndoShape undoShape = undo.pop();
            redo.push(undoShape);
            response =  new BooleanShape(undoShape.getBefore(), undoShape.isCreated(), undoShape.isDeleted(), undoShape.isChanged());
        }catch(Exception e){

        }
        return response;

    }

    public BooleanShape redo(){
        BooleanShape response = new BooleanShape(null, false, false, false);
        try{
            UndoShape redoShape = redo.pop();
            undo.push(redoShape);
            response = new BooleanShape(redoShape.getAfter(), redoShape.isDeleted(), redoShape.isCreated(), redoShape.isChanged());
        }catch(Exception e){}
        return response;
    }

//    public boolean isLastRedoDeleted(){
//        return redo.pop().isDeleted();
//    }

    public ArrayList<Shape> getShapes(){
        ArrayList<Shape> shapeArray = new ArrayList<Shape>();
        shapes.forEach((k,s) -> shapeArray.add(s));
        return shapeArray;
    }

    public ArrayList<Shape[]> getCustomShapes(){
        ArrayList<Shape[]> customArray = new ArrayList<Shape[]>();
        customShapes.forEach((k,s) -> customArray.add(s));
        return customArray;
    }

    public void saveAsJson(){
        fileParser.generateFile(getShapes(), getCustomShapes() ,"json");
    }

    public  void saveAsXml(){
        fileParser.generateFile(getShapes(), getCustomShapes() ,"xml");
    }

    public FileShape load(String fileName) throws IOException {
        FileShape fileContent = fileParser.readFile(fileName);
        shapes.clear();
        customShapes.clear();
        addCustomShapesList(fileContent.getCustomShapes());
        add(fileContent.getShapes());
        return fileContent;
    }

}
