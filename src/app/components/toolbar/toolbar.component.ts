import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor() { }
  @Output() actionEmitter:EventEmitter<string>
       = new EventEmitter<string>();
  mode: string = '';
  ngOnInit(): void {
  }

  emitAction(action: string){
    this.actionEmitter.emit(action);
  }

  createShape(){
    //Put Code Here
  }

}
