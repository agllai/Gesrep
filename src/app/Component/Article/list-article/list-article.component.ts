import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../Srevice/article-service.service';
import { Router } from '@angular/router';
import { Article } from '../../../enteties/Article';
import { ErrorHandler } from '@angular/router/src/router';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {
articles:Article[];
  constructor(private _Articleservice:ArticleService,private _rotuer:Router) { }

  ngOnInit() {
    this._Articleservice.getArticles().subscribe((Articles)=>{
      console.log(Articles);
      this.articles=Articles;
      console.log(this._Articleservice.getter())
    },
    (error:ErrorHandler)=>{console.log(error);
    
    })
  }

}
