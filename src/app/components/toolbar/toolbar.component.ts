import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShapeManagerService } from '../../services/ShapeManager/shape-manager.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  manager: ShapeManagerService;
  constructor(manager: ShapeManagerService) {
    this.manager = manager;
   }
  @Output() actionEmitter:EventEmitter<string>
       = new EventEmitter<string>();
  mode: string = '';
  nShapes: number = 0;
  ngOnInit(): void {
  }

  emitAction(action: string){
    this.actionEmitter.emit(action);
  }

  createShape(){
    if(this.manager.selectedShapes.size > 0){
      this.nShapes++;

      this.emitAction("Custom Shape " + this.nShapes);
      //Put Code Here
  
      this.manager.addCustomShape();
      // console.log(this.manager.customShapes);
    }



  }

  upload(){
    console.log("uploaded")
  }

}
