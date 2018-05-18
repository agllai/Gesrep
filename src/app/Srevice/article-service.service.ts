import { Injectable } from '@angular/core';
import { Http , Response , Headers , RequestOptions} from '@angular/http';
import { Article } from '../enteties/Article';
import { ErrorHandler } from '@angular/router/src/router';
import{Observable}   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
//import { observeOn } from 'rxjs/operator/observeOn';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    observe: "body"
  })
};
@Injectable()
export class ArticleService {
  private baseurl:string = 'http://localhost:8080/Gesrep';
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  private headers1 = new Headers({'Content-Type':'application/json',observe:"body"});
 private options = new RequestOptions({headers:this.headers1});
  
  private article:Article = new Article();
  private articles:Article[];
  private response:any;
  private data:any;
  private hidden:boolean=true;
  constructor(private _http:Http, private _httpClient:HttpClient) { }
  
  createArticle(article: Article) {
    return this._httpClient
      .post<Article>(this.baseurl+'/Article', JSON.stringify(article), httpOptions)
      .map((article:Article)=> {this.article=article}).catch(this.handleError);}
private handleError(error:Error) {
console.log('Error', error);
return Observable.throw(error||"SERVER ERROR"); }
getArticles(){
 this.response= this._http.get(this.baseurl+'/Article',this.options).map((response:Response)=> response.json()).catch( this.handleError);

 return this.response;

}
updateArticle(article: Article) {
  return this._httpClient
    .put<Article>(this.baseurl+'/Article', JSON.stringify(article), httpOptions)
    .map((article:Article)=> this.article=article).catch(this.handleError);
  
  }

deleteArticle(idArticle:number){
  return this._http.delete(this.baseurl+'/Article/'+idArticle,this.options);
}
getArticle(idArticle:number)
{
  return this._httpClient.get<Article>(this.baseurl+"/Article/"+idArticle,httpOptions).map((article:Article)=>{this.article=article;console.log(article) ; return article}).catch(this.handleError);
}
setter(article:Article)
{
this.article =article;
}
setterArticles(articles:Article[]):void
{
this.articles=articles;
}
getter(){
return this.article;
}
getterArticles()
{
return this.articles;
}
gethidden(){
  return this.hidden;
}
sethidden(hidden:boolean):boolean{
  return this.hidden;

}
}
