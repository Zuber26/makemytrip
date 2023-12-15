import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class HttpService {
baseurl:string='http://localhost:3000/'
httpHeaders:HttpHeaders = new HttpHeaders({
"contain-type":"application/json"  
})  
constructor(private http:HttpClient) {}

   getDataFromServer(endPoint:string){
    const url =this.baseurl + endPoint
    return this.http.get(url,{headers:this.httpHeaders})
  }
}
