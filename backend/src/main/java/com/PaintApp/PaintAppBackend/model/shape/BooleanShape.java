package com.PaintApp.PaintAppBackend.model.shape;

public class BooleanShape {
    private Shape shape;
    private boolean isDelete;
    private boolean isCreate;
    private boolean isChange;

    public BooleanShape(Shape shape, boolean isDeleted, boolean isCreate, boolean isChange) {
        this.shape = shape;
        this.isDelete = isDeleted;
        this.isCreate = isCreate;
        this.isChange = isChange;
    }

    public Shape getShape() {
        return shape;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public  boolean isCreate() {
        return isCreate;
    }

    public boolean isChange() {
        return isChange;
    }
}
