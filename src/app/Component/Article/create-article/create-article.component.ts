import { Component, OnInit } from '@angular/core';
import { Article } from '../../../enteties/Article';
import { ArticleService } from '../../../Srevice/article-service.service';
import { Router } from '@angular/router';
import { ADDRCONFIG } from 'dns';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
 article: Article=new Article();
private data:any;
submitted = false;
data1:number;
hidden:boolean;
  constructor(private _ArticleService:ArticleService ,private _rotuer:Router) { }

  ngOnInit() {
    this.article=this._ArticleService.getter();
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
}
