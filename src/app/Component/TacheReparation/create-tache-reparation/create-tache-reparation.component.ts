import { Component, OnInit, ErrorHandler, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { TacheReparation } from '../../../enteties/TacheReparation';
import { TacheReparationService } from '../../../Srevice/tache-reparation.service';
import { Article } from '../../../enteties/Article';
import { Piece } from '../../../enteties/Piece';
import { Composant } from '../../../enteties/Composant';
import { ComposantService } from '../../../Srevice/composant.service';
import { ArticleService } from '../../../Srevice/article-service.service';
import { PieceService } from '../../../Srevice/piece.service';
import { Etat } from '../../../enteties/Etat';
import { EtatService } from '../../../Srevice/etat.service';
import { NgForm, NgModel } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
@Component({
  selector: 'app-create-tache-reparation',
  templateUrl: './create-tache-reparation.component.html',
  styleUrls: ['./create-tache-reparation.component.css']
})
export class CreateTacheReparationComponent implements OnInit {
 // @ViewChild('list') list:ElementRef;
//@Output() addtacheReparation:EventEmitter<TacheReparation[]>=new EventEmitter<TacheReparation[]>();


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
    //this.article=this.articleService.getter();
    //this.piece=this.article.piece;
    
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
    //this.tacheReparation1.etat=this.etat;
    this.listTacheRep=[];
  //  this.tacheReparation1.etat=this.etat;
   // this.composant2.nomComposant="ecran";
   // this.composant2.tarif=21;
   // this.composant2.tarifMinimal=18;
   // this.composantService.createComposant(this.composant2).subscribe((composant:Composant)=>console.log(composant),(error:Error)=>console.log(error));
  /*this.tacheReparationService.TacheRepobserbale.subscribe(
    (tacheRep:TacheReparation[])=>
    {this.listTacheRep=tacheRep;
      console.log(this.listTacheRep,tacheRep);
    },
    (error)=>console.log(error)
    )*/
  }


  add(){
    //this.tacheReparation.etat=this.etat;
    //this.tacheReparation1= form.value;
    //console.log(form,form.value);
    //this.tacheReparation.etat=this.etat;
    //console.log("tache Reparation1 before pushing",this.tacheReparation1, this.etat);
    this.listTacheRep.push(this.tacheReparation);
    //this.listTacheRep.forEach((tacheRep)=>tacheRep.etat=this.etat);
    //this.addtacheReparation.emit(this.listTacheRep);
        console.log(this.listTacheRep,this.tacheReparation,this.tacheReparation1,this.etat);
    this.tacheReparation=new TacheReparation();
   // this.tacheReparation.etat=this.etat;
    //this.tacheReparation.Composant=new Composant();
    this.tacheReparation.etat=this.etat;
    console.log("listtacheRep",this.listTacheRep,"tacheRep",this.tacheReparation,"tacheRep1",this.tacheReparation1);
  //form.reset();
  //this.composant=new Composant();
  //this.tacheReparation.etat=this.etat;
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
