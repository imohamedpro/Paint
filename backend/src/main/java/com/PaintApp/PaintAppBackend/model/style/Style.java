package com.PaintApp.PaintAppBackend.model.style;

public class Style {
    private FillColor fillColor;
    private StrokeColor strokeColor;
    private Dimensions strokeWidth;
    private Cursor cursor;

    public FillColor getFillColor() {
        return fillColor;
    }

    public StrokeColor getStrokeColor() {
        return strokeColor;
    }

    public Dimensions getStrokeWidth() {
        return strokeWidth;
    }

    public Cursor getCursor() {
        return cursor;
    }

    public void setFillColor(FillColor fillColor) {
        this.fillColor = fillColor;
    }

    public void setStrokeColor(StrokeColor strokeColor) {
        this.strokeColor = strokeColor;
    }

    public void setStrokeWidth(Dimensions strokeWidth) {
        this.strokeWidth = strokeWidth;
    }

    public void setCursor(Cursor cursor) {
        this.cursor = cursor;
    }
}









