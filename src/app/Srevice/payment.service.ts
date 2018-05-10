import { Injectable } from '@angular/core';
import { Http , Response , Headers , RequestOptions} from '@angular/http';
import { ErrorHandler } from '@angular/router/src/router';
import{Observable}   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Encaissement } from '../enteties/Enciassement';
import { HttpHeaders, HttpClient } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    observe:"body"
  })
};
@Injectable()
export class PaymentService {
  private baseurl:string = 'http://localhost:8080/Gesrep';
  private headers = new Headers({'Content-Type':'application/json'});

  private options = new RequestOptions({headers:this.headers});
  
  private payment:Encaissement = new Encaissement();
  private payments:Encaissement[];
  private response:any;
  private data:any;
  constructor(private _http:Http , private _httpClient:HttpClient) { }

  createPayment(payment: Encaissement) {
    return this._httpClient
      .post(this.baseurl+'/Encaissement', JSON.stringify(payment), httpOptions)
      .toPromise()
      .then(res => {res as Encaissement;console.log(res);this.data=res;this.payment=res as Encaissement;console.log(this.payment)})
      .catch(this.handleError);}
private handleError(error: any): Promise<any> {
console.log('Error', error); // for demo purposes only
return Promise.reject(error.message || error);}
getPayments(){
 this.response= this._http.get(this.baseurl+'/Encaissement',this.options).map((response:Response)=> response.json() ).catch((error:ErrorHandler)=> this.handleError(error));

 return this.response;

}

setter(Payment:Encaissement)
{
this.payment =Payment;
}
setterPayment(payments:Encaissement[]):void
{
this.payments=payments;
}
getter(){
return this.payment;
}
getterPayments()
{
return this.payments;
}




}
