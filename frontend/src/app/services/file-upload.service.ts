import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  baseApiUrl = "http://localhost:4050/api/upload";

  constructor(private http:HttpClient) { }

  upload(file: File):Observable<HttpEvent<any>> {
    const formData = new FormData(); 
    formData.append("file", file);
    const req = new HttpRequest('POST', this.baseApiUrl, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
    //return this.http.post(this.baseApiUrl, formData)
  }
}
