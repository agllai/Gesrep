import { Injectable } from '@angular/core';
import { Http , Response , Headers , RequestOptions} from '@angular/http';
import { ErrorHandler } from '@angular/router/src/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Encaissement } from '../enteties/Enciassement';
import { Personnel } from '../enteties/Personnel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable()
export class PersonnelService {

  private baseurl:string = 'http://localhost:8080/Gesrep';
  private headers = new Headers({'Content-Type':'application/json'});

  private options = new RequestOptions({headers:this.headers});
  private personnel:Personnel = new Personnel();
  private personnels:Personnel[];
  private response:any;
  private data:any;
  constructor(private _httpClient:HttpClient) { }

  createPersonnel(personnel: Personnel):Observable<Personnel> {
    return this._httpClient
      .post<Personnel>(this.baseurl+'/Personnel', JSON.stringify(personnel), httpOptions)
      .catch(this.handleError);}
private handleError(error: any): Promise<any> {
console.log('Error', error); // for demo purposes only
return Promise.reject(error.message || error);}
getPersonnels():Observable<Personnel[]>{
 this.response= this._httpClient.get<Personnel[]>(this.baseurl+'/Personnel',httpOptions).map((personnels:Personnel[])=> this.setterPersonnels(personnels)).catch((error:ErrorHandler)=> this.handleError(error));

 return this.response;

}

setter(personnel:Personnel)
{
this.personnel =personnel;
}
setterPersonnels(personnels:Personnel[]):void
{
this.personnels=personnels;
}
getter(){
return this.personnel;
}
getterPersonnels()
{
return this.personnels;
}


}
