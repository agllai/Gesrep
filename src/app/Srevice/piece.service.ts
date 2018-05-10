import { Injectable } from '@angular/core';

import {catchError, map} from 'rxjs/operators';

import { ResponceWrapper } from '../enteties/ResponceWrapper';
import { Client } from '../enteties/Client';
import { error } from 'util';
import {InterceptorModule,HttpsRequestInterceptor} from '../Interceptor.module'
import {Observable}   from 'rxjs/Observable';
import { ErrorHandler } from '@angular/router/src/router';


import { Piece } from '../enteties/Piece';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import {Http , Response , Headers , RequestOptions, JsonpModule} from '@angular/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable()
export class PieceService {
  private baseurl:string = 'http://localhost:8080/Gesrep';
  private headers = new Headers({'Content-Type':'application/json'});
 private data:any;
  private options = new RequestOptions({headers:this.headers});
  
  private piece:Piece = new Piece();
  private pieces:Piece[]=[];
  private response:any;
  constructor(private _http:HttpClient) { }
  createPiece(piece: Piece) : Observable<Piece>{
    console.log(piece);
    return this._http.post<Piece>(this.baseurl+'/Piece', JSON.stringify(piece), httpOptions)
    .map((piece:Piece)=> this.piece,catchError((error:ErrorHandler)=> this.handleError(error)));
  }
private handleError(error: any): Promise<any>{
console.log('Error', error); // for demo purposes only
return Promise.reject(error.message || error);}
public getPiece(): Observable<Piece[]>{
 this.response= this._http.get<Piece[]>(this.baseurl+'/Piece',httpOptions).pipe(map((pieces:Piece[])=> this.pieces),catchError((error:ErrorHandler)=> this.handleError(error)));

 return this.response;

}

public setter(piece:Piece)
{
this.piece =piece;
}
public setterPieces(pieces:Piece[]):void
{
this.pieces=pieces;
}
public getter(){
return this.piece;
}
public getterPieces()
{
return this.pieces;
}
}
