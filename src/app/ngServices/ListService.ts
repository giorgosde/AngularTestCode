import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class ListService {
private _basePath ="https://jsonplaceholder.typicode.com";

constructor(private _http:Http) { }

getUsers(){
  return this._http.get(this._basePath + "/users")
         .map((res:Response)=> res.json());
} 

} 