import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShapeManagerService } from '../../services/ShapeManager/shape-manager.service';
import { StepsTrackerService } from '../../services/StepsTracker/steps-tracker.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  manager: ShapeManagerService;
  stepsTracker: StepsTrackerService;
  constructor(manager: ShapeManagerService, stepsTracker: StepsTrackerService) {
    this.manager = manager;
    this.stepsTracker = stepsTracker;
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

      this.emitAction("Custom Shape " + Number(this.nShapes + 1));
      //Put Code Here
  
      this.manager.addCustomShape();
      this.nShapes = this.manager.customShapes.size;

      // console.log(this.manager.customShapes);
    }



  }

  upload(){
    console.log("uploaded")
  }

}
