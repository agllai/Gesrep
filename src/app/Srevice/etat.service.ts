import { Injectable } from '@angular/core';
import { Http , Response , Headers , RequestOptions} from '@angular/http';
import { Article } from '../enteties/Article';
import { ErrorHandler } from '@angular/router/src/router';
import{Observable}   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Etat } from '../enteties/Etat';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    observe: "body"
  })
};
@Injectable()
export class EtatService {
  private baseurl:string = 'http://localhost:8080/Gesrep';
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  private headers1 = new Headers({'Content-Type':'application/json',observe:"body"});
 private options = new RequestOptions({headers:this.headers1});
 etat:Etat=new Etat();
 etats:Etat[]=[];
  constructor(private _httpclient:HttpClient) { }
  createEtat(etat: Etat) {
    return this._httpclient
      .post<Etat>(this.baseurl+'/Etat', JSON.stringify(etat), httpOptions)
      .map((etat:Etat)=> {this.etat=etat}).catch(this.handleError);
    }


private handleError(error:Error) {
console.log('Error', error);
return Observable.throw(error||"SERVER ERROR"); 
}

getEtats(){
return this._httpclient.get<Etat[]>(this.baseurl+'/Etat',httpOptions).map((etats:Etat[])=>this.etats=etats ).catch( this.handleError);

}
getetat(idEtat:number){
  return this._httpclient.get<Etat>(this.baseurl+"/Etat/"+idEtat,httpOptions).map((etat:Etat)=>{this.etat=etat;console.log(etat) ; return etat}).catch(this.handleError);
}

setter(etat:Etat)
{
this.etat =etat;
}

setEtats(etats:Etat[]):void
{
this.etats=etats;
}

getter(){
return this.etat;
}

getterEtats()
{
return this.etats;
}

}
