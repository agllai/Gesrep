import { Component, OnInit, ErrorHandler, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

import { NgForm, NgModel } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { TacheReparation } from '../enteties/TacheReparation';
import { Article } from '../enteties/Article';
import { Piece } from '../enteties/Piece';
import { Composant } from '../enteties/Composant';
import { Etat } from '../enteties/Etat';
import { TacheReparationService } from '../Srevice/tache-reparation.service';
import { ComposantService } from '../Srevice/composant.service';
import { ArticleService } from '../Srevice/article-service.service';
import { PieceService } from '../Srevice/piece.service';
import { EtatService } from '../Srevice/etat.service';
@Component({
  selector: 'app-componentng-typeahead',
  templateUrl: './componentng-typeahead.component.html',
  styleUrls: ['./componentng-typeahead.component.css']
})
export class ComponentngTypeaheadComponent implements OnInit {


  tacheReparation:TacheReparation=new TacheReparation();
  tacheReparation1:TacheReparation=new TacheReparation();
  listTacheRep:TacheReparation[]=[];
  article:Article=new Article();
    piece:Piece=new Piece();
    composants:Composant[]=[];
    active:any;
    composant:Composant=new Composant();
    composant2:Composant=new Composant();
    
  
    etat:Etat=new Etat();
  
    constructor(private tacheReparationService:TacheReparationService,
      
      private composantService:ComposantService,
      private articleService:ArticleService,
      private PieceService:PieceService,
       private etatService:EtatService) 
      {
        }
    
    ngOnInit() {

      
      this.etatService.getetat(1).subscribe(
        (etat:Etat)=>{this.etat=etat;console.log(etat,":etat",this.etat,":this.etat")},(error:ErrorHandler)=>console.log(error,"error")
      ); 
      console.log(this.etat,"etrtttat 1");
      this.composantService.getComposants().subscribe(
        (composants:Composant[])=>{this.composants=composants;console.log(composants) },
        (error:ErrorHandler)=>{console.log("error happened when getting the composant list",error)}
      );;
      
      console.log(this.etat,"etrtttat 2");
      this.tacheReparation.etat=this.etat;
      this.listTacheRep=[];

    }
  
  
    add(){

      this.listTacheRep.push(this.tacheReparation);

          console.log(this.listTacheRep,this.tacheReparation,this.tacheReparation1,this.etat);
      this.tacheReparation=new TacheReparation();

      this.tacheReparation.etat=this.etat;
      console.log("listtacheRep",this.listTacheRep,"tacheRep",this.tacheReparation,"tacheRep1",this.tacheReparation1);
  
    console.log(this.tacheReparation.etat,"tacheRep Etat");
  
    this.tacheReparationService.TacheRepobserbale.next(this.listTacheRep);
    } 
     save(){
      this.tacheReparationService.createTacheReparation(this.listTacheRep).subscribe(
        (tacheReparations:TacheReparation[])=>{this.listTacheRep=tacheReparations },
        (error:ErrorHandler)=>{console.log("error happened when saving the composant list",error)}
  
      )
      
      this.tacheReparationService.TacheRepobserbale.next(this.listTacheRep);
      this.listTacheRep=[];  
    }
    delete(tacheReparation){
     const index:number= this.listTacheRep.indexOf(tacheReparation);
     if(index!==-1){
     this.listTacheRep.splice(index,1);
     }
    }
    choose(composant:Composant){
      this.tacheReparation.Composant=composant;
      this.composant=composant;
      this.tacheReparation.etat=this.etat;
      console.log(this.tacheReparation,composant);
    }
    changeClass(article1:any){
      this.active=article1;
    }
    isactive(article1:any):String{
      if(article1!==this.active){  
      return "";
    }
      else{
        return "active";
      }
    }
  
  
  }
  

