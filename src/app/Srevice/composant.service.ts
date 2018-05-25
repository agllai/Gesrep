import { Injectable } from '@angular/core';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { RequestOptions, Http} from '@angular/http';
import { Composant } from '../enteties/Composant';
//import { observeOn } from 'rxjs/operator/observeOn';
import {Observable} from 'rxjs/Observable';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    observe: "body"
  })
};
@Injectable()
export class ComposantService {
  private baseurl:string = 'http://localhost:8080/Gesrep';
 // private headers = new HttpHeaders({'Content-Type':'application/json'});
  //private headers1 = new Headers({'Content-Type':'application/json',observe:"body"});
 //private options = new RequestOptions({headers:this.headers1});
  
  private composant :Composant = new Composant();
  private listComposant:Composant[];
  private response:any;
  private data:any;
  private hidden:boolean=true;
  constructor(private _http:Http, private _httpClient:HttpClient) { }
  
  createComposant(composant: Composant) {
    return this._httpClient
      .post<Composant>(this.baseurl+'/Composant', JSON.stringify(composant), httpOptions)
      .map((composants:Composant)=> {this.composant=composants}).catch(this.handleError);
    }


private handleError(error:Error) {
console.log('Error', error);
return Observable.throw(error||"SERVER ERROR"); 
}

getComposants(){
 return this._httpClient.get<Composant[]>(this.baseurl+'/Composant',httpOptions).map((composants:Composant[])=> {this.listComposant=composants;return composants}).catch( this.handleError);

}
updateComposant(composant: Composant) {
  return this._httpClient
    .put<Composant>(this.baseurl+'/Composant', JSON.stringify(composant), httpOptions)
    .map((composants:Composant)=> this.composant=composants).catch(this.handleError);
  
  }

deleteComposant(idComposant:number){
  return this._httpClient.delete(this.baseurl+'/Composant/'+idComposant,httpOptions);
}

getComposant(idComposant:number)
{
  return this._httpClient.get<Composant>(this.baseurl+"/Article/"+idComposant,httpOptions).map((composants:Composant)=>{this.composant=composants;console.log(composants) ; return composants}).catch(this.handleError);
}

setter(composant:Composant)
{
this.composant =composant;
}

setterArticles(composant:Composant[]):void
{
this.listComposant=composant;
}

getter(){
return this.composant;
}

getterArticles()
{
return this.listComposant;
}


}
