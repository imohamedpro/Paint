import { Injectable } from '@angular/core';
import { Shape } from '../../classes/Shape';
import { ControllerService } from '../controller/controller.service';
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
      let shape: Shape = this.manager.loadShape(response.shape);
      if(response.shape == null) return;
      if(response.delete){
        console.log("delete");
        this.manager.shapes.delete(shape.id);
      }else if(response.create || response.change){
        console.log("no delete");

        this.manager.shapes.set(shape.id, shape);
      }
      console.log(this.manager.shapes.get(shape.id));

     });
   }
   redo(){
     this.controller.redo().subscribe((response)=>{
       console.log("redo recieved");

       console.log(response.shape);
       let shape: Shape = this.manager.loadShape(response.shape);
      if(response.shape == null) return;

       if(response.delete){
         console.log("delete");
         this.manager.shapes.delete(shape.id);
       }else if(response.create || response.change){
         console.log("no delete");
 
         this.manager.shapes.set(shape.id, shape);
       }
       console.log(this.manager.shapes.get(shape.id));
 
      });
    }
}