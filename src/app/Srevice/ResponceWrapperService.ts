import { Injectable, ErrorHandler } from '@angular/core';
import {Http , Response , Headers , RequestOptions} from '@angular/http';
import{Observable}   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ResponceWrapper } from '../enteties/ResponceWrapper';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { error } from 'util';
import { ROUTER_CONFIGURATION } from '@angular/router';
import {InterceptorModule,HttpsRequestInterceptor} from '../Interceptor.module';
import { Article } from '../enteties/Article';
import { Client } from '../enteties/Client';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Encaissement } from '../enteties/Enciassement';
import { Tache_Reparation } from '../enteties/Tache_Reparation';
import { Demande_Reparation } from '../enteties/Demande_Reparation';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
// httpOptions.headers.set('Access-Control-Allow-Origin','http://localhost/Gesrep');
@Injectable()
export class ResponceWrapperService {
  
  private baseurl:string = 'http://localhost:8080/Gesrep';
  private headers = new Headers({'Content-Type':'application/json'});

  private options = new RequestOptions({headers:this.headers});
  
private client:Client=new Client();
private article:Article=new Article();
  private enciassement:Encaissement=new Encaissement();
  private tache_Reparatation:Tache_Reparation[];
private demande_reparation:Demande_Reparation=new Demande_Reparation();
  private ResWrap = new ResponceWrapper();
  data:any;
  constructor(private _http:HttpClient) { }
  /*createrespwrap(ResWrap:ResponceWrapper){
    return this._http.post(this.baseurl+'/createreparation',JSON.stringify(ResWrap)  ,this.options).map((response:Response)=> response.json()).catch(this.errorHandler);
  }
  errorHandler(error:Response){
    return Observable.throw(error||"SERVER ERROR");
  }*/
      createrespwrap(ResWrap):Promise<any> {
       return this._http
          .post(this.baseurl+'/createreparation', JSON.stringify(ResWrap), httpOptions)
          .toPromise()
          .then((responce:Response) => {responce.json() as ResponceWrapper;console.log(responce);this.data=responce})
          .catch(this.handleError);
        
          
        
         /* this._http.post(this.baseurl+"/client",JSON.stringify(client), httpOptions).map((client:Client)=>{this.client=client;console.log(this.client)}).catch((Error:ErrorHandler)=>this.handleError(Error));
          this._http.post(this.baseurl+"/Article",JSON.stringify(article), httpOptions).map((article:Article)=>{this.article=article;console.log(this.article)}).catch((Error:ErrorHandler)=>this.handleError(Error));
        this.ResWrap.article=this.article;
        this.ResWrap.client=this.client;
        return this.ResWrap;*/
      }
 private handleError(error: any) {
    console.log('Error', error); // for demo purposes only
    return Observable.throw(error||"SERVER ERROR");}
setter(article:Article,client:Client)
{
  this.article=article;
  this.client=client;
}
getter(){
  return this.article;
}
getter1(){
  return this.client ;
}
}