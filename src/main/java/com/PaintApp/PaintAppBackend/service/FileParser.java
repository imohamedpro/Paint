package com.PaintApp.PaintAppBackend.service;

import com.PaintApp.PaintAppBackend.model.shape.FileShape;
import com.PaintApp.PaintAppBackend.model.shape.Shape;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.dataformat.xml.*;
import java.io.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.util.ArrayList;

public class FileParser {
    public void generateFile(ArrayList<Shape> shapes, ArrayList<Shape[]> customShapes ,String extension){
        FileShape fileShape = new FileShape();
        fileShape.setShapes(shapes);
        fileShape.setCustomShapes(customShapes);

        if(extension.equals("json")){
            ObjectMapper obj = new ObjectMapper();
            try {
                obj.writeValue(new File("drawing.json"), fileShape);
                File file = new File("drawing.json");
            }
            catch (IOException e) {
                e.printStackTrace();
            }
            System.out.println("Json Parsed");
        }else if(extension.equals("xml")){
            XmlMapper xmlMapper = new XmlMapper();
            xmlMapper.enable(SerializationFeature.INDENT_OUTPUT);
            try {
                xmlMapper.writeValue(new File("drawing.xml"), fileShape);
                File file = new File("drawing.xml");
            }
            catch (IOException e) {
                e.printStackTrace();
            }
            System.out.println("Xml Parsed");
        }
    }

    public FileShape readFile(String fileName) throws IOException {
        String extension = fileName.split("\\.")[1].toLowerCase();
        if(extension.equals("json")) {
            System.out.println("loading JSON file");
            String json = Files.readString(Paths.get(fileName), StandardCharsets.UTF_8);
            return new ObjectMapper().readValue(json, FileShape.class);
        } else if(extension.equals("xml")){
            System.out.println("loading XML file");
            XmlMapper xmlMapper = new XmlMapper();
            String xml = Files.readString(Paths.get(fileName), StandardCharsets.UTF_8);
            return xmlMapper.readValue(xml, FileShape.class);
        }
        return new FileShape();
    }

}
