package com.PaintApp.PaintAppBackend.controller;

import com.PaintApp.PaintAppBackend.model.shape.BooleanShape;
import com.PaintApp.PaintAppBackend.model.shape.UndoShape;
import com.PaintApp.PaintAppBackend.model.shape.Shape;
import com.PaintApp.PaintAppBackend.service.PaintService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
//@CrossOrigin(origins = "localhost:4200")
@RequestMapping("/api")
public class PaintController {

    PaintService paintService;

    public PaintController(PaintService service){
        this.paintService = service;
    }

    @PostMapping("/add")
    public void add(@RequestBody Shape[] receivedShapes){
        this.paintService.add(receivedShapes);
        System.out.println("Added");
    }

    @PostMapping("/delete")
    public void delete(@RequestBody int[] ids){
        this.paintService.delete(ids);
        System.out.println("Deleted");
    }

    @GetMapping("/undo")
    public BooleanShape undo(){
        System.out.println("Undo");
        return this.paintService.undo();
    }

    @GetMapping("/redo")
    public BooleanShape redo(){
        System.out.println("Redo");
        return this.paintService.redo();
    }

    @GetMapping("/get")
    public ArrayList<Shape> get(){
        System.out.println("Get");
        return  this.paintService.getShapes();
    }
}
