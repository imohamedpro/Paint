import { ShapeManagerService } from "../services/ShapeManager/shape-manager.service";
import { Point } from "./Point";
import { Shape } from "./Shape";

export class EventHandler {
    manager: ShapeManagerService;
    initialClick!: Point;
    dragging: boolean; 
    constructor(manager: ShapeManagerService){
        this.manager = manager;
        this.dragging = false;
    }
    clicked(shape: Shape): void {
        if(!this.dragging){
            this.manager.select(shape);
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