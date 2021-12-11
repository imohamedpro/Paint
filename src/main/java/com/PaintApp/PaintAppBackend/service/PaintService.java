package com.PaintApp.PaintAppBackend.service;

import com.PaintApp.PaintAppBackend.model.shape.BooleanShape;
import com.PaintApp.PaintAppBackend.model.shape.UndoShape;
import com.PaintApp.PaintAppBackend.model.shape.Shape;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Stack;

@Service
public class PaintService {
    private Map<Integer, Shape> shapes = new HashMap<Integer, Shape>();
    private Stack<UndoShape> undo = new Stack<UndoShape>();
    private Stack<UndoShape> redo = new Stack<UndoShape>();

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

    public void delete(int[] ids){
        for(int i = 0; i < ids.length; i++){
            Shape deletedShape = this.shapes.get(ids[i]);
            this.shapes.remove(ids[i]);
            UndoShape undoShape = new UndoShape(deletedShape, deletedShape,true, false, false);
            this.undo.push(undoShape);
        }
    }

    public BooleanShape undo(){
        UndoShape undoShape = undo.pop();
        redo.push(undoShape);
        return new BooleanShape(undoShape.getBefore(), undoShape.isCreated(), undoShape.isDeleted(), undoShape.isChanged());
    }

    public BooleanShape redo(){
        UndoShape redoShape = redo.pop();
        undo.push(redoShape);
        return new BooleanShape(redoShape.getAfter(), redoShape.isDeleted(), redoShape.isCreated(), redoShape.isChanged());
    }

    public boolean isLastRedoDeleted(){
        return redo.pop().isDeleted();
    }

    public ArrayList<Shape> getShapes(){
        ArrayList<Shape> shapeArray = new ArrayList<Shape>();
        shapes.forEach((k,s) -> shapeArray.add(s));
        return shapeArray;
    }


}
