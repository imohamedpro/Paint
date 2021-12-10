package com.PaintApp.PaintAppBackend.Interfaces;
import com.PaintApp.PaintAppBackend.Shapes.*;

public interface IShape {
    public int getId();
    public String getType();
    public void draw(Point p);
    public void move(Point newCenter);
    public void resize(Point newCenter, int[] newDimensions);
    public IShape copy();
    public void setFill(Color color);
    public void setStroke(Color color);
}
