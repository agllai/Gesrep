import { Injectable, OnInit } from '@angular/core';
import { Client } from '../enteties/Client';
import { Article } from '../enteties/Article';
import { Encaissement } from '../enteties/Enciassement';
import { TacheReparation } from '../enteties/TacheReparation';
import { DemandeReparation } from '../enteties/Demande_Reparation';
import { ResponceWrapper } from '../enteties/ResponceWrapper';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DemandeReaparationService implements OnInit {
  private client:Client=new Client();
  private article:Article=new Article();
  private enciassement:Encaissement=new Encaissement();
  private tacheReparatation:TacheReparation[];
  private demandeReparation:DemandeReparation=new DemandeReparation();
  private ResWrap = new ResponceWrapper();
  data:any;
  demande:boolean;
  constructor(private _http:HttpClient) { }
ngOnInit(){
this.demande=false;

}
}
