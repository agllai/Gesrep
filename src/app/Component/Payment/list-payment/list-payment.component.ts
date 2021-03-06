import { Component, OnInit } from '@angular/core';
import { Encaissement } from '../../../enteties/Enciassement';
import { PaymentService } from '../../../Srevice/payment.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorHandler } from '@angular/router/src/router';

@Component({
  selector: 'app-list-payment',
  templateUrl: './list-payment.component.html',
  styleUrls: ['./list-payment.component.css']
})
export class ListPaymentComponent implements OnInit {
  public payments:Encaissement[]=[];
  public payment:Encaissement;
  //hidden:boolean;
  p: number = 1;
size:number=1;
IPP:number=5;
 key:string="idEncaissement";
  reverse: boolean = false;
  filter:string;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;}
  constructor(private _Paymentservice:PaymentService,private _router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.getPayments();
    //this.hidden=true;
    console.log(this.payment);
    this.p=1;
    this.IPP=5;
    /*
    this._Paymentservice.getPayments().subscribe((payments:Encaissement[])=>{
      console.log(payments);
      this.payments=payments;
      console.log(this._Paymentservice.getterPayments())
    },
    (error:ErrorHandler)=>{console.log(error);
    
    })*/
  }
  deletePayment(payment:Encaissement){
    this._Paymentservice.deletePayment(payment.idEncaissement).subscribe((data)=>{
       // console.log("data:",data);
    this.getPayments();                                                                                               
    this._router.navigate(["../ListPayment"]);
    this.payment=payment;
    //setTimeout(()=>{this.hidden=false},100);
    //setTimeout(()=>{this.hidden=true},2000);
    console.log(this.payment)
    },(error)=>{
      console.log(error);
    });
    
    
  }
  updatePayment(payment:Encaissement){
    this._Paymentservice.setter(payment);
    //this._Articleservice.sethidden(true);
    this._router.navigate(['../MakePayment'],{relativeTo : this.route});
  
  }
  getPayments(){
    this._Paymentservice.getPayments().subscribe((payments:Encaissement[])=>{
      console.log(payments);
      this.payments=payments;
      console.log(this._Paymentservice.getterPayments())
    },
    (error:ErrorHandler)=>{console.log(error);
    
    })
  }
  newPayment():void{
    
    this.payment=new Encaissement();
    this._Paymentservice.setter(this.payment);
    //this._Articleservice.sethidden(true);
    this._router.navigate(['../MakePAyment'],{relativeTo : this.route});
  } 
}
