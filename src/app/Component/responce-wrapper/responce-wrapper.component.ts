import { Component, OnInit } from '@angular/core';
import { ResponceWrapper } from '../../enteties/ResponceWrapper';
import { ResponceWrapperService } from '../../Srevice/ResponceWrapperService';
import {Router} from '@angular/router';
import { Client } from '../../enteties/Client';
import { Article } from '../../enteties/Article';
import {NgForm, NgModel,NgControl} from '@angular/forms';
import { ClientService } from '../../Srevice/ClientService';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'app-responce-wrapper',
  templateUrl: './responce-wrapper.component.html',
  styleUrls: ['./responce-wrapper.component.css']
})
export class ResponceWrapperComponent implements OnInit {
reswrap :ResponceWrapper=new ResponceWrapper(); 
client:Client=new Client();
article:Article= new Article();
data:any;
submitted = false;
  constructor(private _ResWrapService:ResponceWrapperService,private _rotuer:Router) { 
    
  }

  ngOnInit() {
    this.article=this._ResWrapService.getter();
    this.client=this._ResWrapService.getter1();
    this.client.typeClient="citoyen";
  }
  newreswrap():void{
    this.submitted = false;
    this.reswrap=new ResponceWrapper();
  }
  private save():any{
    //console.log(this.reswrap);
    return this._ResWrapService.createrespwrap(this.reswrap);
    
  }
  processForm(){
//this._ResWrapService.setter(this.article,this.client);
    this.reswrap.client=this.client;
    this.reswrap.article=this.article;
    
   /* this._ResWrapService.createrespwrap(this.reswrap).subscribe((reswrap)=>{
      console.log(reswrap);
      this._rotuer.navigate(['/op']);this.submitted = true;
      this.submitted = true;
    },(error)=>{
      console.log(error);
    });*/
    
   //this.reswrap.client.numtel=this.client.numtel;
   this.article.livraison=false;
   this._ResWrapService.createrespwrap(this.reswrap);
    
     this.data=this.save();
      console.log(this.data.article , this.data.client,this.data,this._ResWrapService.data);
      console.log(this.client,this.article);
      this.submitted = true;
      this._rotuer.navigate(["\hello"]);
      
     /* this._ResWrapService.createrespwrap(this.reswrap).subscribe(
         data => {
           // refresh the list
           console.log(data);
           this._rotuer.navigate(['/op']);
           this.submitted = true;
           
           
         },
         error => {
           console.error("Error saving food!");
           return Observable.throw(error);
         }
      );*/
  }
}
