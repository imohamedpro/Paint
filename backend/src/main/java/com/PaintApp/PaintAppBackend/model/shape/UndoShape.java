package com.PaintApp.PaintAppBackend.model.shape;

import com.PaintApp.PaintAppBackend.model.shape.Shape;

public class UndoShape {
    private Shape before;
    private Shape after;
    private boolean isDeleted;
    private boolean isCreated;
    private boolean isChanged;

    public UndoShape(Shape before, Shape after , boolean isDeleted, boolean isCreated, boolean isChanged){
        this.before = before;
        this.after = after;
        this.isDeleted = isDeleted;
        this.isChanged = isChanged;
        this.isCreated = isCreated;
    }

    public Shape getBefore() {
        return before;
    }

    public Shape getAfter(){
        return after;
    }

    public boolean isDeleted() {
        return isDeleted;
    }

    public boolean isCreated() {
        return isCreated;
    }

    public boolean isChanged() {
        return isChanged;
    }
}
