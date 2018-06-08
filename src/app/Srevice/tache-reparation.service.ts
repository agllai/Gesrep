import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { RequestOptions, Http } from '@angular/http';
import { Article } from '../enteties/Article';
import {Observable} from 'Rxjs/Observable';
import { TacheReparation} from '../enteties/TacheReparation';
import { Subject } from 'rxjs/Subject';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    observe: "body"
  })
};
@Injectable()
export class TacheReparationService {
  private baseurl:string = 'http://localhost:8080/Gesrep';
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  //private headers1 = new Headers({'Content-Type':'application/json',observe:"body"});
 //private options = new RequestOptions({headers:this.headers1});
  
  private tacheReparation:TacheReparation = new TacheReparation();
  
  public response:any;
  public data:any;
  public listTacheReparation:TacheReparation[]=[];
  TacheRepobserbale=new Subject();
  constructor(private _http:Http, private _httpClient:HttpClient) { }
  
  
  createTacheReparation(tacheReparation: TacheReparation[]) {
    return this._httpClient
      .post<TacheReparation[]>(this.baseurl+'/TacheReparation', JSON.stringify(tacheReparation), httpOptions)
      .map((tacheReparations:TacheReparation[])=> {this.listTacheReparation=tacheReparations;console.log(this.listTacheReparation,tacheReparation,tacheReparations);return tacheReparations }).catch(this.handleError);}
private handleError(error:Error) {
console.log('Error', error);
return Observable.throw(error||"SERVER ERROR"); }
getTacheReparation(){
 this.response= this._httpClient.get<TacheReparation[]>(this.baseurl+'/Article',httpOptions).map((TacheReparation:TacheReparation[])=> {this.listTacheReparation=TacheReparation; return TacheReparation;}).catch( this.handleError);

 return this.response;

}
updateTacheReparation(tacheReparation: TacheReparation) {
  return this._httpClient
    .put<TacheReparation>(this.baseurl+'/TacheReparation', JSON.stringify(tacheReparation), httpOptions)
    .map((tachereparation:TacheReparation)=> this.tacheReparation=tachereparation).catch(this.handleError);
  
  }

deleteArticle(idTacheReparation:number){
  return this._httpClient.delete<TacheReparation>(this.baseurl+'/TacheReparation/'+idTacheReparation,httpOptions);
}
gettacheReparation(idTacheReparation:number)
{
  return this._httpClient.get<TacheReparation>(this.baseurl+"/TacheReparation/"+idTacheReparation,httpOptions).map((tachereparation:TacheReparation)=>{this.tacheReparation=tachereparation;console.log(tachereparation) ; return tachereparation}).catch(this.handleError);
}
setter(tachereparation:TacheReparation)
{
this.tacheReparation =tachereparation;
}
settertacheReparation(tacheReparation:TacheReparation[]):void
{
this.listTacheReparation=tacheReparation;
}
getter(){
return this.tacheReparation;
}
getterTacheReparations()
{
return this.listTacheReparation;
}
}
