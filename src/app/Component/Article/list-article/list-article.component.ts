import { Component, OnInit, Input, Output } from '@angular/core';
import { ArticleService } from '../../../Srevice/article-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Article } from '../../../enteties/Article';
import { ErrorHandler } from '@angular/router/src/router';
import  { PaginatePipe } from 'ngx-pagination';
import { EventEmitter } from 'events';
//import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css'],
})
export class ListArticleComponent implements OnInit {

articles:Article[];
hidden:Boolean;
article:Article;
p: number = 1;
size:number=1;
IPP:number=5;
NbPage:number;
Nbpage1:number[];
 key:string="idArticle";

  constructor(private _Articleservice:ArticleService,private _router:Router,private route:ActivatedRoute) {
   
   }

  ngOnInit() {
    this.getArticles();
    this.hidden=true;
    console.log(this.article);
    this.IPP=5;
    //this.countarticle();
   // this.nbpage;
    this.p=1;
    console.log(this.size / this.IPP);
    /*this._Articleservice.getArticles().subscribe((Articles)=>{
      console.log(Articles);
      this.articles=Articles;
      console.log(this._Articleservice.getter())
    },
    (error:ErrorHandler)=>{console.log(error);
    
    })
    this.hidden=true;*/
  }
  newArticle():void{
    
    this.article=new Article();
    this._Articleservice.setter(this.article);
    //this._Articleservice.sethidden(true);
    this._router.navigate(['../CreateArticle'],{relativeTo : this.route});

  }
  deleteArticle(article:Article){
    this._Articleservice.deleteArticle(article.idArticle).subscribe((data)=>{
       // console.log("data:",data);
    this.getArticles();                                                                                               
    this._router.navigate(["../listArticle"]);
    this.article=article;
    setTimeout(()=>{this.hidden=false},100);
    setTimeout(()=>{this.hidden=true},2000);
    console.log(this.article)
    },(error)=>{
      console.log(error);
    });
    
    
  }
  updateArticle(article:Article){
    this._Articleservice.setter(article);
    //this._Articleservice.sethidden(true);
    this._router.navigate(['../CreateArticle'],{relativeTo : this.route});
  
  }
  Livrai(article:Article){
    article.livraison=true;
    console.log(this.article);
    this._Articleservice.updateArticle(article).subscribe((article:Article)=>{
      console.log(article);
      this._router.navigate(['../listArticle']);
    },(error)=>{
      console.log(error);
    });
  console.log("updated");

    /*this._Articleservice.updateArticle(article);
    this.getArticles();                                                                                               
    this._router.navigate(["../listArticle"]);*/
    //this.updateArticle(article);
  }
  getArticles(){
    this._Articleservice.getArticles().subscribe((articles:Article[])=>{
      console.log(articles);
      this.articles=articles;
    },
    (error:ErrorHandler)=>{console.log(error);})
  }


  reverse: boolean = false;
  filter:string;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  modifynbPage(nbpage:number){
    this.IPP=nbpage;
  }
 /*

  countarticle(){
   this.size= this.articles.length;
console.log(this.size);
  }
  nbpage(){
    this.NbPage= this.size / this.IPP;
    
    for(var i=0;i<this.NbPage;i++) {
      this.Nbpage1.push(i);
    }
    console.log(this.NbPage+"nb de page");
  }
  changePage(page:number){
    this.p=page;
  }*/
}
