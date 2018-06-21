import { Component, OnInit } from '@angular/core';
import { Client } from '../../enteties/Client';
import { Article } from '../../enteties/Article';
import { TacheReparation } from '../../enteties/TacheReparation';
import { Composant } from '../../enteties/Composant';
import { Encaissement } from '../../enteties/Enciassement';
import { ArticleService } from '../../Srevice/article-service.service';
import { ClientService } from '../../Srevice/ClientService';
import { PaymentService } from '../../Srevice/payment.service';
import { TacheReparationService } from '../../Srevice/tache-reparation.service';
import { ComposantService } from '../../Srevice/composant.service';
import { DemandeReparationService } from '../../Srevice/demande-reparation.service';
import { DemandeReparation } from '../../enteties/Demande_Reparation';
import { Router,  ActivatedRoute } from '@angular/router';
import { relative } from 'path';

@Component({
  selector: 'app-fiche-reparation',
  templateUrl: './fiche-reparation.component.html',
  styleUrls: ['./fiche-reparation.component.css']
})
export class FicheReparationComponent implements OnInit {
 client:Client=new Client();
 article:Article= new Article();
 ListtacheReparation:TacheReparation[]=[];
 Composant:Composant=new Composant();
 payment:Encaissement=new Encaissement();
 ficheReparation:DemandeReparation=new DemandeReparation();
style:string="margin-top:10px;";

  constructor(
    private ArticleService :ArticleService,
    private ClientService : ClientService,
    private paymentService: PaymentService,
    private tacheReparationService:TacheReparationService,
    private ComposantService:ComposantService,
   // private demandeReparationService:DemandeReparationService,
    private _rotuer:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.style="margin-top:10px;";
   this.client= this.ClientService.getter();
   this.article=this.ArticleService.getter();
   this.ListtacheReparation=this.tacheReparationService.getterTacheReparations();
   this.payment=this.paymentService.getter();
  // this.ficheReparation=this.demandeReparationService.getter();
  this.ficheReparation.date_heure=new Date();
  this.ArticleService.articleobserbale.subscribe(
    (article:Article)=>{
      this.article=article;
      console.log(this.article,article);
    },
    (error:Error)=>{
      console.log(error);
    }
  );
  this.ClientService.CLientobserbale.subscribe(
    (client:Client)=>{
      this.client=client;
      console.log(this.client,client,"client");
    },
    (error:Error)=>{
      console.log(error);
    }
  );
  this.paymentService.Paymentobserbale.subscribe(
    (payment:Encaissement)=>{
      this.payment=payment;
      console.log(this.payment,payment);
    },
    (error:Error)=>{
      console.log(error);
    }
  );
  this.tacheReparationService.TacheRepobserbale.subscribe(
    (tacheReparation:TacheReparation[])=>{
      this.ListtacheReparation=tacheReparation;
      console.log(this.ListtacheReparation,tacheReparation);
    },
    (error:Error)=>{
      console.log(error);
    }
  );

  }
  CreateArticle(){
    this.style="margin-top:10px;";
  this.article=new Article();
  this.ArticleService.setter(this.article);
  this._rotuer.navigate(['Article'],{relativeTo: this.route});
  this.ArticleService.articleobserbale.next(this.article);

  }
  UpdateArticle(){
    this.style="margin-top:10px;";

    this.ArticleService.setter(this.article);
    this._rotuer.navigate(['Article'],{relativeTo: this.route});
    this.ArticleService.articleobserbale.next(this.article);

  }

 ResetArticle(){

  this.article=new Article();
  this.ArticleService.articleobserbale.next(new Article());

 }
 CreateClient(){
  this.style="margin-top:10px;";

   this.client=new Client();
  this.ClientService.setter(this.client);
  this._rotuer.navigate(['Client'],{relativeTo: this.route});
  this.ClientService.CLientobserbale.next(this.client);
}
UpdateClient(){
  this.style="margin-top:10px;";
  this.ClientService.setter(this.client);
  this._rotuer.navigate(['Client'],{relativeTo: this.route});
  this.ClientService.CLientobserbale.next(this.client);
}

ResetClient(){
  this.client=new Client();
  this.ClientService.CLientobserbale.next(this.client);
}
CreateTacheReparations(){
  this.style="margin-top:400px;";

  this.ListtacheReparation=[];
  this.tacheReparationService.settertacheReparation(this.ListtacheReparation);
  this._rotuer.navigate(['tacheReparation'],{relativeTo: this.route});
  this.tacheReparationService.TacheRepobserbale.next(this.ListtacheReparation);
}
UpdateTacheReparations(){
  this.style="margin-top:400px;";

  this.tacheReparationService.settertacheReparation(this.ListtacheReparation);
  this._rotuer.navigate(['tacheReparation'],{relativeTo: this.route});
  this.tacheReparationService.TacheRepobserbale.next(this.ListtacheReparation);
}

ResetTacheReparations(){
  this.ListtacheReparation=[];
  this.tacheReparationService.TacheRepobserbale.next(this.ListtacheReparation);
}
CreatePayment(){
  this.style="margin-top:800px;";

  this.payment=new Encaissement();
  this.paymentService.setter(this.payment);
  this._rotuer.navigate(['Payment'],{relativeTo: this.route});
  this.paymentService.Paymentobserbale.next(this.payment);
}
UpdatePayment(){
  this.style="margin-top:800px;";
  this.paymentService.setter(this.payment);
  this._rotuer.navigate(['Payment'],{relativeTo: this.route});
  this.paymentService.Paymentobserbale.next(this.payment);
}

ResetPayment(){
  this.payment=new Encaissement();
  this.paymentService.Paymentobserbale.next(this.payment);
}
}
