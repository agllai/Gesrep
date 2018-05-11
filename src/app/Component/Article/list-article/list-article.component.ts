import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../Srevice/article-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Article } from '../../../enteties/Article';
import { ErrorHandler } from '@angular/router/src/router';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {
articles:Article[];
hidden:Boolean;
article:Article;
  constructor(private _Articleservice:ArticleService,private _router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.getArticles();
    this.hidden=true;
    /*this._Articleservice.getArticles().subscribe((Articles)=>{
      console.log(Articles);
      this.articles=Articles;
      console.log(this._Articleservice.getter())
    },
    (error:ErrorHandler)=>{console.log(error);
    
    })
    this.hidden=true;*/
  }
  deleteArticle(article:Article){
    this._Articleservice.deleteArticle(article.idArticle).subscribe((data)=>{
       // console.log("data:",data);
    this.getArticles();                                                                                               
    this._router.navigate(["../listArticle"]);
    this.article=article;
    setTimeout(()=>{this.hidden=false},100);
    setTimeout(()=>{this.hidden=true},2000);
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
}
