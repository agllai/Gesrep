import { Component, OnInit } from '@angular/core';
import { Encaissement } from '../../../enteties/Enciassement';
import { PaymentService } from '../../../Srevice/payment.service';
import { Router } from '@angular/router';
import { Article } from '../../../enteties/Article';
import { ArticleService } from '../../../Srevice/article-service.service';
import { ErrorHandler } from '@angular/router/src/router';
import { Subject } from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';


@Component({
  selector: 'app-create-payments',
  templateUrl: './create-payments.component.html',
  styleUrls: ['./create-payments.component.css']
})
export class CreatePaymentsComponent implements OnInit  {

  payment: Encaissement=new Encaissement();
private data:any;
private submitted:boolean = false;
hidden:boolean=false;
listPayment:Encaissement[]=[];
// article:Article=new Article();
 key:string="moyenPaiment";
 active:any;
public payments:Encaissement[]=[];
//idArticle:number;
discounttype:string="%";
  constructor(private _PaymentService:PaymentService , private _ArticleService:ArticleService,private _rotuer:Router) { }

  ngOnInit() {
    this.hidden=false;
    this._PaymentService.getPayments().subscribe((payments:Encaissement[])=>{
      console.log(payments);
      this.payments=payments;
      console.log(this._PaymentService.getterPayments())
    },
    (error:ErrorHandler)=>{console.log(error);
    
    })
    this.listPayment=this.payments;
    this.payment=this._PaymentService.getter();
   /* this.article=this.payment.article;
    
    if(this.article.idArticle===undefined){ 
    this.article=this._ArticleService.getter();
    }else{
      this.article=this.payment.article;
    }*/
    
   this._PaymentService.Paymentobserbale.subscribe(
     (payment:Encaissement)=>{
       this.payment=payment;
       console.log(this.payment,payment)
     }
   );/*
   const obser=Observable.create((observer: Observer<Encaissement>)=>{
    this.payment.totalHT=this.payment.tarif;

if (this.payment.tva!==undefined){
  this.payment.totalTTC=this.payment.totalHT*(1+(this.payment.tva/100));
 if(this.discounttype="%"){
  this.payment.totalTTC=this.payment.totalTTC/(1+(this.payment.reduction/100));  
}else{
  this.payment.totalTTC=this.payment.totalTTC-this.payment.reduction;
}
}
observer.next(this.payment);
   });
   obser.subscribe((payment:Encaissement)=>this.payment=payment);*/
  }
  newPayment():void{
    
    this.payment=new Encaissement();
  }
  private save(payment:Encaissement){
    return this._PaymentService.createPayment(payment)
    
    .subscribe((payment:Encaissement)=>{this.payment=payment; this._rotuer.navigate(['../ListPayment']);},
    (error:ErrorHandler)=>console.log(error));
        
  }
  processForm(payment:Encaissement,article:Article)
  {
    //this.article=this._ArticleService.gerArticle(this.article.idArticle);
   // console.log("testing article existence");
    /*if (this.article.marque===undefined){
      console.log("marque undefined");
      this._ArticleService.getArticle(this.article.idArticle).subscribe((article1:Article)=>{
        console.log(article1,"article");
        this.payment.article=this._ArticleService.getter();
        console.log(this.payment);
      },
      (error:ErrorHandler)=>{console.log("error",error);})
}else{
      this.payment.article=this.article;
}
      this.data=this.save(this.payment);
      console.log(this.data,"saving result");
     
      this.submitted = true;
      console.log(this._PaymentService.getter(),"payment service object");*/
      
      //
      if(this.payment.idEncaissement===undefined){
      /* if (this.article.marque===undefined){
          console.log("marque undefined");
          this._ArticleService.getArticle(this.article.idArticle).subscribe((article1:Article)=>{
            console.log(article1,"article");
            this.article=this._ArticleService.getter();
            console.log(this.payment);
          },
          (error:ErrorHandler)=>{console.log("error",error);})
          
       }
          this.payment.article=this.article;*/
           
          this.data=this.save(this.payment);
          console.log(this.data,"saving result");
         
          
          console.log(this._PaymentService.getter(),"payment service object");
      // this.data=this._PaymentService.createPayment(payment);
         
         
       
         console.log("saved");
      }else{
        /*
        this._ArticleService.getArticle(this.article.idArticle).subscribe((article1:Article)=>{
          console.log(article1,"article");
          this.payment.article=this._ArticleService.getter();},
          (error:ErrorHandler)=>{console.log("error",error);});
        */
         console.log(this.payment);
           this.data=this._PaymentService.updatePayment(this.payment).subscribe((payment:Encaissement)=>{
             console.log(payment);
             this._rotuer.navigate(['../ListPayment']);
           }
           ,(error)=>{
             console.log(error)
           });
         console.log("updated");
       }
      
       
       console.log(this.data);
       this._PaymentService.Paymentobserbale.next(this.payment);
       this.submitted = true;
       setTimeout(() => {this.submitted=false;}, 4000); 
}
onClick(payment:Encaissement){
 this.payment.moyenPaiment=payment.moyenPaiment;
}

  
choose(payment:Encaissement){
  this.payment.moyenPaiment=payment.moyenPaiment;
  console.log(this.payment,payment);
}
changeClass(payment:Encaissement){
  this.active=payment;
}
isactive(payment:Encaissement):String{
  if(payment!==this.active){  
  return "";
}
  else{
    return "active";
  }
}
changePaymentTarif(event:any){

this.payment.totalHT=this.payment.tarif;
/*
if (this.payment.tva!==undefined){
  this.payment.totalTTC=this.payment.totalHT*(1+(this.payment.tva/100));
 if(this.discounttype="%"){
  this.payment.totalTTC=this.payment.totalTTC/(1+(this.payment.reduction/100));  
}else{
  this.payment.totalTTC=this.payment.totalTTC-this.payment.reduction;
}
}*/

}


}