import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ShapeManagerService} from '../ShapeManager/shape-manager.service'
import { Observable } from 'rxjs';
import { Shape } from '../../classes/Shape';
import { BooleanShape, FileShape } from '../../classes/Responses/BooleanShape';


@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  private readonly apiUrl = 'http://localhost:4050/api/';
  constructor(private http: HttpClient, manager: ShapeManagerService) { }
  // evaluateExpression(expression: Expression): Observable<IResponse> {

  //   return this.http.post<IResponse>(`${this.apiUrl}/evaluateExpression/${expression.operator.path}`,
  //                                     new RequestBody(expression));
  // }
  
  // evaluateFunction(expression: Expression): Observable<IResponse> {
    
  //   return this.http.post<IResponse>(`${this.apiUrl}/evaluateFunction/${expression.function.path}`,
  //                                     new RequestBody(expression));
  // }
  addShape(shapes: Shape[]): Observable<any>{
    return this.http.post(`${this.apiUrl}add`, shapes)
  }

  deleteShape(ids: Array<number>): Observable<any>{
    return this.http.post(`${this.apiUrl}delete`, ids);
  }
  addCustomShape(shapes: Shape[]): Observable<any>{
    return this.http.post(`${this.apiUrl}define`, shapes);
  }
  uploadFile(file: File):Observable<FileShape>{
    return this.http.post(`${this.apiUrl}upload`, file);
  }

  undo(): Observable<BooleanShape>{
    return this.http.get<BooleanShape>(`${this.apiUrl}undo`);
  }
  redo(): Observable<BooleanShape>{
    return this.http.get<BooleanShape>(`${this.apiUrl}redo`);
  }

  downloadJson(): Observable<any>{
    return this.http.get(`${this.apiUrl}download-json`);
  }

  downloadXml(): Observable<any>{
    return this.http.get(`${this.apiUrl}download-xml`);
  }

}
