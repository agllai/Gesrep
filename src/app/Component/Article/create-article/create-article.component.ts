import { Component, OnInit,ViewChild, TemplateRef } from '@angular/core';
import { Article } from '../../../enteties/Article';
import { ArticleService } from '../../../Srevice/article-service.service';
import { Router } from '@angular/router';
import { ADDRCONFIG } from 'dns';
//import {NgbTypeaheadConfig} from '@ng-bootstrap/ng-bootstrap';
//import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {FormControl, NgModel} from '@angular/forms';
//import {NgbTypeahead, NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map, merge} from 'rxjs/operators';
import { ErrorHandler } from '@angular/router/src/router';
//import { ResultTemplateContext } from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window';
import { startWith} from 'rxjs/operators';
import { Piece } from '../../../enteties/Piece';
import { PieceService } from '../../../Srevice/piece.service';
import { Operateur } from '../../../enteties/Operateur';
import { OperateurService } from '../../../Srevice/operateur.service';
@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css'],
  
})
export class CreateArticleComponent implements OnInit {
article: Article=new Article();
private data:any;
submitted = false;
data1:number;
hidden:boolean;
listArticle:Article[]=[];
 articles:Article[]=[];
 listPiece:Piece[]=[];
 key:string="model";
 active:any;
 operateur:Operateur=new Operateur();
 operateurs:Operateur[]=[];

//@ViewChild('instance') instance: NgbTypeahead;
  constructor(
    private _ArticleService:ArticleService ,
    private _rotuer:Router,
    private _PieceService:PieceService,
    private _OperateurService:OperateurService
    ) { 
   
  }

  ngOnInit() {
    this.article=this._ArticleService.getter();
   // this.operateur=this.article.operateur;
    this._ArticleService.getArticles().subscribe((articles:Article[])=>{
      console.log(articles);
      this.articles=articles;
      this.listArticle=this.articles;
    },
    (error:ErrorHandler)=>{console.log(error);})
  
    this.listArticle=this.articles;
  
  this._PieceService.getPiece().subscribe((pieces:Piece[])=>{
    console.log(pieces,"pieces");
    this.listPiece=pieces;
    
  },
  (error:ErrorHandler)=>{console.log(error);});

  this._OperateurService.getOperateurs().subscribe((operateurs:Operateur[])=>{
    this.operateurs=operateurs;
    console.log(this.operateurs,operateurs);
  },
  (error:ErrorHandler)=>{console.log(error);}
  );
 

this._ArticleService.articleobserbale.subscribe(
  (article:Article)=>{
    this.article=article;
    console.log(this.article,article);
  },
  (error:Error)=>{
    console.log(error);
  }
);
this.operateur=this.article.operateur;
}
  newArticle():void{
    
    this.article=new Article();
  }
  private save():any{
    return this._ArticleService.createArticle(this.article)
    
    //console.log(this.client);
  }
  processForm(article:Article)
  {
    //  this.reswrap.client=this.client;
      //this.reswrap.article=this.article;
      
  /*this.article.livraison=false;
      this.data=this.save();
      console.log(this.data);
      this.submitted = true;*/
      //this.article=this._ArticleService.getter();
     // this.article.idArticle=this._ArticleService.getter().idArticle;
     // console.log(this.article);
     if(this.article.idArticle===undefined){
       this.article.livraison=false;
      this.data=this._ArticleService.createArticle(this.article).subscribe((article:Article)=>{
        console.log(article);
        this.article=article;
        this._rotuer.navigate(['../listArticle']);
      },(error)=>{
        console.log(error);
      });
        console.log("saved");
      }else{
        console.log(this.article);
          this.data=this._ArticleService.updateArticle(this.article).subscribe((article:Article)=>{
            console.log(article);
            this.article=article;
            this._rotuer.navigate(['../listArticle']);
          },(error)=>{
            console.log(error);
          });
        console.log("updated");
      }
     
      
      console.log(this.data);
      this.submitted = true;
      setTimeout(() => {this.submitted=false;}, 4000);

      this._ArticleService.articleobserbale.next(this.article)
  }/*
  onClick(piece:Piece){
    this.article.model=piece.model;
    this.article.marque=piece.marque;
   this.article.piece=piece;
  }*/

    
  chooseModel(piece:Piece){
    this.article.model=piece.model;
    this.article.marque=piece.marque;
   this.article.piece=piece;
    console.log(this.article,piece);
  }
    
  chooseMarque(piece:Piece){
    this.article.marque=piece.marque;
  // this.article.piece=piece;
    console.log(this.article,piece);
  }
  chooseOperateur(operateur){
    this.article.operateur=operateur;
    this.operateur=operateur;
    console.log(this.article,operateur);
  }
  changeClass(obj:any){
    this.active=obj;
  }
 
  isactive(piece:Piece):String{
    if(piece!==this.active){  
    return "";
  }
    else{
      return "active";
    }
  }



 
  
}
