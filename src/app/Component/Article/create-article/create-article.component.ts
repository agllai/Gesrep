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
 key:string="model";
 active:any;
 reactiveArticles: Observable<Article[]>;
 tdArticles: Article[];

 articleModelCtrl: FormControl;
 tdDisabled = false;
//@ViewChild('instance') instance: NgbTypeahead;
  constructor(private _ArticleService:ArticleService ,private _rotuer:Router) { 
    this.tdArticles = this.articles;
    this.articleModelCtrl = new FormControl();
    this.reactiveArticles = this.articleModelCtrl.valueChanges
      .pipe(
        startWith(this.articleModelCtrl.value),
        map(val => this.displayFn(val)),
        map(name => this.filterStates(name))
      );
  }

  ngOnInit() {
    this.article=this._ArticleService.getter();
    this._ArticleService.getArticles().subscribe((articles:Article[])=>{
      console.log(articles);
      this.articles=articles;
      this.listArticle=this.articles;
    },
    (error:ErrorHandler)=>{console.log(error);})
  
    this.listArticle=this.articles;
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
        this._rotuer.navigate(['../listArticle']);
      },(error)=>{
        console.log(error);
      });
        console.log("saved");
      }else{
        console.log(this.article);
          this.data=this._ArticleService.updateArticle(this.article).subscribe((article:Article)=>{
            console.log(article);
            this._rotuer.navigate(['../listArticle']);
          },(error)=>{
            console.log(error);
          });
        console.log("updated");
      }
     
      
      console.log(this.data);
      this.submitted = true;
      setTimeout(() => {this.submitted=false;}, 4000);

      
  }
  onClick(article){
    this.article.model=article.model;
    this.article.marque=article.marque;
    this.article.operateur=article.operateur;
  }

    
  choose(article:Article){
    this.article=article;
    console.log(this.article,article);
  }
  changeClass(article1:Article){
    this.active=article1;
  }
  isactive(article1:Article):String{
    if(article1!==this.active){  
    return "";}
    else{
      return "active";
    }
  }



  changelist(){
this.listArticle=this._filter(this.articles,this.article.model);
  }
  
  filterStates(val: string) {
    return val ? this._filter(this.articles, val) : this.articles;
  }
  private _filter(articles: Article[], val: string) {
    const filterValue = val.toLowerCase();
    return articles.filter(article => article.model.toLowerCase().startsWith(filterValue));
  }
  displayFn(value: any): string {
    return value && typeof value === 'object' ? value.name : value;
  }
}
