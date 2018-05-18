import { Component, OnInit } from '@angular/core';
import { Encaissement } from '../../../enteties/Enciassement';
import { PaymentService } from '../../../Srevice/payment.service';
import { Router } from '@angular/router';
import { Article } from '../../../enteties/Article';
import { ArticleService } from '../../../Srevice/article-service.service';
import { ErrorHandler } from '@angular/router/src/router';

@Component({
  selector: 'app-create-payments',
  templateUrl: './create-payments.component.html',
  styleUrls: ['./create-payments.component.css']
})
export class CreatePaymentsComponent implements OnInit {

  payment: Encaissement=new Encaissement();
private data:any;
private submitted:boolean = false;
article:Article=new Article();

  constructor(private _PaymentService:PaymentService , private _ArticleService:ArticleService,private _rotuer:Router) { }

  ngOnInit() {
    this.payment=this._PaymentService.getter();
    if(this.payment.article.idArticle===undefined){ 
    this.article=this._ArticleService.getter();
    }else{
      this.article=this.payment.article;
    }
  }
  newArticle():void{
    
    this.payment=new Encaissement();
  }
  private save(payment:Encaissement){
    return this._PaymentService.createPayment(payment)
    
    .subscribe((payment:Encaissement)=>this.payment=payment,
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
        if (this.article.marque===undefined){
          console.log("marque undefined");
          this._ArticleService.getArticle(this.article.idArticle).subscribe((article1:Article)=>{
            console.log(article1,"article");
            this.article=this._ArticleService.getter();
            console.log(this.payment);
          },
          (error:ErrorHandler)=>{console.log("error",error);})
          
        }
          this.payment.article=this.article;
           
          this.data=this.save(this.payment);
          console.log(this.data,"saving result");
         
          
          console.log(this._PaymentService.getter(),"payment service object");
      // this.data=this._PaymentService.createPayment(payment);
         
         this._rotuer.navigate(['../ListPayment']);
       
         console.log("saved");
      }else{
        //
        this._ArticleService.getArticle(this.article.idArticle).subscribe((article1:Article)=>{
          console.log(article1,"article");
          this.payment.article=this._ArticleService.getter();},
          (error:ErrorHandler)=>{console.log("error",error);});
        //
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
       this.submitted = true;
       setTimeout(() => {this.submitted=false;}, 4000);


  
}}