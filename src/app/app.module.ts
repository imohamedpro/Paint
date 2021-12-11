import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SketchComponent } from './components/sketch/sketch.component';
import { CircleComponent } from './components/circle/circle.component';
import { RectangleComponent } from './components/rectangle/rectangle.component';
import { EllipseComponent } from './components/ellipse/ellipse.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ShapebarComponent } from './components/shapebar/shapebar.component';
import { SelectionComponent } from './components/selection/selection.component';
import { ResizerComponent } from './components/resizer/resizer.component';
import { LineComponent } from './components/line/line.component';
import { TriangleComponent } from './components/triangle/triangle.component';
import { SquareComponent } from './components/square/square.component';
import { UserDefinedComponent } from './components/user-defined/user-defined.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SketchComponent,
    CircleComponent,
    RectangleComponent,
    EllipseComponent,
    ToolbarComponent,
    ShapebarComponent,
    SelectionComponent,
    ResizerComponent,
    LineComponent,
    TriangleComponent,
    SquareComponent,
    UserDefinedComponent,
  ],
  imports: [
    BrowserModule,
    HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
