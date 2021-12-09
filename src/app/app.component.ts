import { Style } from './classes/Style';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paint-app';
  action = 'Move';
  style = new Style();
  sendAction(action:string){
    this.action = action;
  }
  sendStyle(style:Style){
    this.style = style;
    console.log("Style sent");
  }
}
