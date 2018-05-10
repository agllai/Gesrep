import { Component, OnInit } from '@angular/core';
import { Encaissement } from '../../../enteties/Enciassement';
import { PaymentService } from '../../../Srevice/payment.service';
import { Router } from '@angular/router';
import { ErrorHandler } from '@angular/router/src/router';

@Component({
  selector: 'app-list-payment',
  templateUrl: './list-payment.component.html',
  styleUrls: ['./list-payment.component.css']
})
export class ListPaymentComponent implements OnInit {
  public payments:Encaissement[]=[];
  constructor(private _Paymentservice:PaymentService,private _rotuer:Router) { }

  ngOnInit() {
    this._Paymentservice.getPayments().subscribe((payments:Encaissement[])=>{
      console.log(payments);
      this.payments=payments;
      console.log(this._Paymentservice.getterPayments())
    },
    (error:ErrorHandler)=>{console.log(error);
    
    })
  }
}
