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
submitted = false;
article:Article=new Article();
  constructor(private _PaymentService:PaymentService , private _ArticleService:ArticleService,private _rotuer:Router) { }

  ngOnInit() {
    this.payment=this._PaymentService.getter();
    this.article=this._ArticleService.getter();
    
  }
  newArticle():void{
    
    this.payment=new Encaissement();
  }
  private save():any{
    return this._PaymentService.createPayment(this.payment);
    //console.log(this.client);
  }
  processForm(payment:Encaissement)
  {
    //  this.reswrap.client=this.client;
      //this.reswrap.article=this.article;
      

    //this.article=this._ArticleService.gerArticle(this.article.idArticle);
    if (this.article.marque===null){
      this._ArticleService.getArticle(this.article.idArticle).subscribe((article:Article)=>{
        console.log(article);
        this.article=article;
      },
      (error:ErrorHandler)=>{console.log(error);})
}
      this.payment.article=this.article;
     
      this.data=this.save();
      console.log(this.data);
     
      this.submitted = true;
      console.log(this._PaymentService.getter());
      
      
  }
}