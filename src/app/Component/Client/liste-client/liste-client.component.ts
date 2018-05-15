import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../Srevice/ClientService';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { Client } from '../../../enteties/Client';
import { ErrorHandler } from '@angular/router/src/router';
import { paramKey } from 'blocking-proxy/built/lib/webdriver_commands';

@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.css']
})
export class ListeClientComponent implements OnInit {
  clients:Client[];
  hidden:boolean;
  client:Client;
  p: number = 1;
size:number=1;
IPP:number=5;
NbPage:number;
Nbpage1:number[];
 key:string="idClient";
  reverse: boolean = false;
  filter:string;
  constructor(private _Clientservice:ClientService,private _router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.getClients();
    this.hidden=true;
    this.IPP=5;
   
    this.p=1;
  //this.route.params.subscribe((params:Params)=>this.hidden=params.hidden,(error)=>console.error(error));
  }
 
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  modifynbPage(nbpage:number){
    this.IPP=nbpage;
  }
  newClient(){
    this.client=new Client();
this._Clientservice.setter(this.client);
this._router.navigate(['../CreateClient'],{relativeTo : this.route});
  }
  deleteClient(client:Client){
    this._Clientservice.deleteClient(client.idClient).subscribe((data)=>{
       // console.log("data:",data);
    this.getClients();                                                                                               

    this._router.navigate(["../ListeClient"]);
    this.client=client;
    setTimeout(()=>{this.hidden=false},100);
    setTimeout(()=>{this.hidden=true},1500);
    },(error)=>{
      console.log(error);
    });
    
    
  }
  updateClient(client:Client){
    this._Clientservice.setter(client);
    this._router.navigate(['../CreateClient'],{relativeTo : this.route});
  
  }
  getClients(){
    this._Clientservice.getclient().subscribe((Clients)=>{
      console.log(Clients);
      this.clients=Clients;
    },
    (error:ErrorHandler)=>{console.log(error);
    
    })
  }
}
