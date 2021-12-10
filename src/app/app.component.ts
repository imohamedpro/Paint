import { style } from '@angular/animations';
import { Style } from './classes/Style';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paint-app';
  mode = 'Move';
  action = '';
  style = new Style();
  styleChange: number = 0;
  sendMode(mode:string){
    this.mode = mode;
  }
  sendStyle(style:Style){
    this.style = style;
    console.log("Style sent");
  }
  sendStyleChange(change: number){
    this.styleChange++;
  }
  sendAction(action:string){
    this.action = action;
    console.log("Action sent");
  }
}
