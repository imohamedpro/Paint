import { ShapeManagerService } from "../services/ShapeManager/shape-manager.service";
import { Point } from "./Point";
import { Shape } from "./Shape";

export class EventHandler {
    manager: ShapeManagerService;
    initialClick!: Point;
    dragging: boolean; 
    // ctrl: boolean;
    constructor(manager: ShapeManagerService){
        this.manager = manager;
        this.dragging = false;
        // this.ctrl = false;
    }
    // ctrlDown(event: KeyboardEvent){
    //     console.log(event);
    //     if(event.key == 'Control'){
    //       console.log('ctrl down');
    //       this.ctrl = true;
    //     }
    //     else if(event.key === 'Delete'){
    //       this.manager.delete();
    //       console.log('delete is down');
    //     }
    //   }

    // ctrlUp(event: KeyboardEvent){
    // if(event.key == 'Control'){
    //     console.log("ctrl up");
    //     this.ctrl = false;
    // }
    // }
    clicked(shape: Shape): void {
        if(!this.dragging){
          // shape.isSelected = !shape.isSelected;
            this.manager.select(shape);
        //   if(this.manager.selectedShapes.size == 0){  //first one to be clicked
        //     this.manager.select(shape);
    
        //   }else if (shape.isSelected){
        //     this.manager.deselect(shape);
    
        //   }else if(!shape.isSelected && this.ctrl) {
        //     this.manager.select(shape);
        //   }else{
        //     this.manager.clearSelected();
        //     this.manager.select(shape);
        //   }
        }
    }
    mouseDown(e: MouseEvent, shape: Shape):void {
        if(e.button == 0 && shape.isSelected){
          this.initialClick = new Point(e.clientX, e.clientY);
          this.manager.setDragging(this.initialClick);
          console.log(this.initialClick);
        }
      }
}