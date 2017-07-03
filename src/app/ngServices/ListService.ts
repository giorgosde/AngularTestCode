import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class ListService {
private _basePath ="https://jsonplaceholder.typicode.com";

public data :BehaviorSubject<any> = new BehaviorSubject(true);

constructor(private _http:Http) { }

getUsers(){
  return this._http.get(this._basePath + "/users")
         .map((res:Response)=> res.json());
} 

getPosts(){
    return this._http.get(this._basePath + "/posts")
         .map((res:Response)=> res.json());
} 
} 