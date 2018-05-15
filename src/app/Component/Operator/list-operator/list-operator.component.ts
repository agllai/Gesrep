import { Component, OnInit } from '@angular/core';
import { Article } from '../../../enteties/Article';
import { ArticleService } from '../../../Srevice/article-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorHandler } from '@angular/router/src/router';

@Component({
  selector: 'app-list-operator',
  templateUrl: './list-operator.component.html',
  styleUrls: ['./list-operator.component.css']
})
export class ListOperatorComponent implements OnInit {
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

  games = [
    {
      "id":"1",
      "name": "DOTA 2",
      "genre": "Strategy"
    },
    {
      "id":"2",
      "name": "AOE 3",
      "genre": "Strategy"
    },
    {
      "id":"3",
      "name": "GTA 5",
      "genre": "RPG"
    },
    {
      "id":"4",
      "name": "Far Cry 3",
      "genre": "Action"
    },
    {
      "id":"5",
      "name": "GTA San Andreas",
      "genre": "RPG"
    },
    {
      "id":"6",
      "name": "Hitman",
      "genre": "Action"
    },
    {
      "id":"7",
      "name": "NFS MW",
      "genre": "Sport"
    },{
      "id":"8",
      "name": "Fifa 16",
      "genre": "Sport"
    },{
      "id":"9",
      "name": "NFS Sen 2",
      "genre": "Sport"
    },{
      "id":"10",
      "name": "Witcher Assassins on King",
      "genre": "Adventure"
    },
    {
      "id":"1",
      "name": "DOTA 2",
      "genre": "Strategy"
    },
    {
      "id":"2",
      "name": "AOE 3",
      "genre": "Strategy"
    },
    {
      "id":"3",
      "name": "GTA 5",
      "genre": "RPG"
    },
    {
      "id":"4",
      "name": "Far Cry 3",
      "genre": "Action"
    },
    {
      "id":"5",
      "name": "GTA San Andreas",
      "genre": "RPG"
    },
    {
      "id":"6",
      "name": "Hitman",
      "genre": "Action"
    },
    {
      "id":"7",
      "name": "NFS MW",
      "genre": "Sport"
    },{
      "id":"8",
      "name": "Fifa 16",
      "genre": "Sport"
    },{
      "id":"9",
      "name": "NFS Sen 2",
      "genre": "Sport"
    },{
      "id":"10",
      "name": "Witcher Assassins on King",
      "genre": "Adventure"
    },
    {
      "id":"1",
      "name": "DOTA 2",
      "genre": "Strategy"
    },
    {
      "id":"2",
      "name": "AOE 3",
      "genre": "Strategy"
    },
    {
      "id":"3",
      "name": "GTA 5",
      "genre": "RPG"
    },
    {
      "id":"4",
      "name": "Far Cry 3",
      "genre": "Action"
    },
    {
      "id":"5",
      "name": "GTA San Andreas",
      "genre": "RPG"
    },
    {
      "id":"6",
      "name": "Hitman",
      "genre": "Action"
    },
    {
      "id":"7",
      "name": "NFS MW",
      "genre": "Sport"
    },
    {
      "id":"8",
      "name": "Fifa 16",
      "genre": "Sport"
    },
    {
      "id":"9",
      "name": "NFS Sen 2",
      "genre": "Sport"
    },
    {
      "id":"10",
      "name": "Witcher Assassins on King",
      "genre": "Adventure"
    },
    {
      "id":"1",
      "name": "DOTA 2",
      "genre": "Strategy"
    },
    {
      "id":"2",
      "name": "AOE 3",
      "genre": "Strategy"
    },
    {
      "id":"3",
      "name": "GTA 5",
      "genre": "RPG"
    },
    {
      "id":"4",
      "name": "Far Cry 3",
      "genre": "Action"
    },
    {
      "id":"5",
      "name": "GTA San Andreas",
      "genre": "RPG"
    },
    {
      "id":"6",
      "name": "Hitman",
      "genre": "Action"
    },
    {
      "id":"7",
      "name": "NFS MW",
      "genre": "Sport"
    },
    {
      "id":"8",
      "name": "Fifa 16",
      "genre": "Sport"
    },
    
    {
      "id":"9",
      "name": "NFS Sen 2",
      "genre": "Sport"
    },
    
    {
      "id":"10",
      "name": "Witcher Assassins on King",
      "genre": "Adventure"
    }
  ];

  //sorting
 
  reverse: boolean = false;
  filter:string;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

}
