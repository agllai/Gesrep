import { Injectable } from '@angular/core';
import { Http , Response , Headers , RequestOptions} from '@angular/http';
import { ErrorHandler } from '@angular/router/src/router';
import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Encaissement } from '../enteties/Enciassement';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { Operateur } from '../enteties/Operateur';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    observe: 'body'
  })
};

@Injectable()
export class OperateurService {
  private baseurl: string = 'http://localhost:8080/Gesrep';
  private headers = new Headers({'Content-Type': 'application/json'});

  private options = new RequestOptions({headers:this.headers});
  private operateur:Operateur=new Operateur();
  private operateurs:Operateur[]=[];
  private response: any;

  constructor(private _http:Http , private _httpClient:HttpClient) { }
  private handleError(error: any) {
    console.log('Error', error); // for demo purposes only
    return Observable.throw(error.message || error);}
    getOperateurs(){
     return this._httpClient.get<Operateur[]>(this.baseurl+'/Operator',httpOptions)
     .map((operateurs:Operateur[])=> {this.operateurs=operateurs;return operateurs} )
     .catch((error:ErrorHandler)=> this.handleError(error));
    }
    getters(){
      return this.operateurs;

    }
    setters(operateurs:Operateur[]){
      this.operateurs=operateurs;

    }
    getter(){
      return this.operateur;
    }
    setter(operateur:Operateur){
      this.operateur=operateur;
    }
}
