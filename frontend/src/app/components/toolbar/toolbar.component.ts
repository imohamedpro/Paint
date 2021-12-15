import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShapeManagerService } from '../../services/ShapeManager/shape-manager.service';
import { StepsTrackerService } from '../../services/StepsTracker/steps-tracker.service';

import { FileUploadService } from '../../services/file-upload.service';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  manager: ShapeManagerService;
  stepsTracker: StepsTrackerService;
  constructor(manager: ShapeManagerService, stepsTracker: StepsTrackerService, private fileUploadService: FileUploadService) {
    this.manager = manager;
    this.stepsTracker = stepsTracker;
   }
  @Output() actionEmitter:EventEmitter<string>
       = new EventEmitter<string>();
  mode: string = '';
  nShapes: number = 0;
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  //file: File = null;

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

  // upload(){
  //   console.log("uploaded")
  // }

  upload(event: any) {
    let file: File = event.target.files[0];
    this.loading = !this.loading;
        console.log(file);
        this.fileUploadService.upload(file).subscribe(
            (event: any) => {
                if (typeof (event) === 'object') {
                    // Short link via api response
                    this.shortLink = event.link;
                    this.loading = false; // Flag variable 
                }
            }
        );
}
}
