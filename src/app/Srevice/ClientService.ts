import { Injectable } from '@angular/core';
import {Http , Response , Headers , RequestOptions, JsonpModule} from '@angular/http';
import{Observable}   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ResponceWrapper } from '../enteties/ResponceWrapper';
import { Client } from '../enteties/Client';
import { error } from 'util';
import { ROUTER_CONFIGURATION } from '@angular/router';
import {InterceptorModule,HttpsRequestInterceptor} from '../Interceptor.module'
import 'rxjs/add/operator/toPromise';
import { ErrorHandler } from '@angular/router/src/router';

import { HttpHeaderResponse, HttpHeaders ,HttpClient} from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { promise } from 'protractor';
import { Subject } from 'rxjs/Subject';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    observe: "body"
  })
};
@Injectable()
export class ClientService {
  private baseurl:string = 'http://localhost:8080/Gesrep';
  private headers = new Headers({'Content-Type':'application/json'});
data:any;
  private options = new RequestOptions({headers:this.headers});
  
  private client:Client = new Client();
  private clients:Client[];
  private response:any;
  private method:string="add";
  CLientobserbale=new Subject();
  constructor(private _http:Http,private _httpClient:HttpClient ) { }
  /*createClient(client:Client){
    return this._http.post(this.baseurl+'/client',JSON.stringify(client)  ,this.options).map((response:Response)=> response.json(),error=>this.errorHandler(error));
  }*/
  
 
      createClient(client: Client) {
        return this._http
          .post(this.baseurl+'/client', JSON.stringify(client), {headers : this.headers})
          .map((response:Response)=> response.json()).catch(this.handleError);
         }
   private handleError(error: any):Promise<any> {
    console.log('Error', error); // for demo purposes only
    return (error.message);
  }
    getclient(){
     this.response= this._http.get(this.baseurl+'/Client',this.options).map((response:Response)=> response.json(),(error:ErrorHandler)=>console.log(error));
    
     return this.response;

    }
    
    updateClient(client: Client) {
      return this._httpClient
        .put<Client>(this.baseurl+'/UpdateClient', JSON.stringify(client), httpOptions)
        .map((client:Client)=> this.client=client).catch(this.handleError);
      
      }
 
    deleteClient(idClient:number){
      return this._http.delete(this.baseurl+'/Client/'+idClient,this.options);
    }
   
setter(client:Client)
{
  this.client =client;
}
setterClients(clients:Client[]):void
{
  this.clients=clients;
}
getter():Client{
  return this.client;
}
getterClients()
{
  return this.clients;
}
getMethod(){
  return this.method;
}
setMethod(method:string){
  this.method=method;
}
}