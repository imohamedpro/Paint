package com.PaintApp.PaintAppBackend.controller;

import com.PaintApp.PaintAppBackend.model.shape.BooleanShape;
import com.PaintApp.PaintAppBackend.model.shape.FileShape;
import com.PaintApp.PaintAppBackend.model.shape.Shape;
import com.PaintApp.PaintAppBackend.service.PaintService;

import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

@RestController
//@CrossOrigin(origins = "localhost:4200")
@RequestMapping("/api")
public class PaintController {

    PaintService paintService;

    public PaintController(PaintService service){
        this.paintService = service;
    }

    @PostMapping("/add")
    public void add(@RequestBody Shape[] receivedShapes) throws IOException {
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

    @PostMapping("/define")
    public void addCustomShape(@RequestBody Shape[] receivedShape) throws IOException {
        this.paintService.addCustomShapes(receivedShape);
        System.out.println("Defined");
    }

    @GetMapping("/download-json")
    public ResponseEntity<Object> sendJsonFile() throws IOException  {
        System.out.println("Get JSON");
        paintService.saveAsJson();
        String filename = "drawing.json";
        File file = new File(filename);
        InputStreamResource resource = new InputStreamResource(new FileInputStream(file));

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", String.format("attachment; filename=\"%s\"", file.getName()));
        headers.add("Cache-Control", "no-cache, no-store, must-revalidate");
        headers.add("Pragma", "no-cache");
        headers.add("Expires", "0");

        ResponseEntity<Object>
                responseEntity = ResponseEntity.ok().headers(headers).contentLength(file.length()).contentType(
                MediaType.parseMediaType("application/txt")).body(resource);

        return responseEntity;
    }

    @GetMapping("/download-xml")
    public ResponseEntity<Object> sendXmlFile() throws IOException  {
        System.out.println("Get XML");
        paintService.saveAsXml();
        String filename = "drawing.xml";
        File file = new File(filename);
        InputStreamResource resource = new InputStreamResource(new FileInputStream(file));

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", String.format("attachment; filename=\"%s\"", file.getName()));
        headers.add("Cache-Control", "no-cache, no-store, must-revalidate");
        headers.add("Pragma", "no-cache");
        headers.add("Expires", "0");

        ResponseEntity<Object>
                responseEntity = ResponseEntity.ok().headers(headers).contentLength(file.length()).contentType(
                MediaType.parseMediaType("application/txt")).body(resource);

        return responseEntity;
    }

    @PostMapping("/upload")
    public FileShape uploadFile(@RequestParam("file") MultipartFile file) throws IOException {
        try {
            Files.copy(file.getInputStream(), Paths.get(file.getOriginalFilename()));
        } catch (Exception e) {
            throw new RuntimeException("Could not store the file. Error: " + e.getMessage());
        }
        return this.paintService.load(file.getOriginalFilename());
    }


}
