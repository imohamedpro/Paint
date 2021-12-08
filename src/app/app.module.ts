import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SketchComponent } from './components/sketch/sketch.component';
import { CircleComponent } from './components/circle/circle.component';
import { RectangleComponent } from './components/rectangle/rectangle.component';
import { EllipseComponent } from './components/ellipse/ellipse.component';

@NgModule({
  declarations: [
    AppComponent,
    SketchComponent,
    CircleComponent,
    RectangleComponent,
    EllipseComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
