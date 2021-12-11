import { Injectable } from '@angular/core';
import { Shape } from '../../classes/Shape';
import { ControllerService } from '../controller/controller.service';
import { ShapeFactoryService } from '../ShapeFactory/shape-factory.service';
import { ShapeManagerService } from '../ShapeManager/shape-manager.service';

@Injectable({
  providedIn: 'root'
})
export class StepsTrackerService {
  manager: ShapeManagerService;
  controller: ControllerService;
  constructor(manager: ShapeManagerService, controller: ControllerService) {
    this.manager = manager;
    this.controller = controller;
   }

   undo(){
     this.controller.undo().subscribe((response)=>{
      console.log("undo recieved");
      console.log(response.shape);
      let shape: Shape = this.manager.factory.loadShape(response.shape);
      Object.assign(shape, response.shape);
      if(response.delete){
        console.log("delete");
        this.manager.shapes.delete(shape.id);
      }else if(response.create || response.change){
        console.log("no delete");

        this.manager.shapes.set(shape.id, response.shape);
      }
      console.log(this.manager.shapes.get(shape.id));

     });
   }
   redo(){
     this.controller.redo().subscribe((response)=>{
       console.log("redo recieved");

       let shape!: Shape;
       Object.assign(shape, response.shape);
       if(response.delete){
         console.log("delete");
         this.manager.shapes.delete(shape.id);
       }else if(response.create || response.change){
         console.log("no delete");
 
         this.manager.shapes.set(shape.id, response.shape);
       }
       console.log(this.manager.shapes.get(shape.id));
 
      });
    }
    save(){}


    load(){}
}