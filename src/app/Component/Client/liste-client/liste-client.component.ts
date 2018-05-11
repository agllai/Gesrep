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
  constructor(private _Clientservice:ClientService,private _router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.getClients();
    this.hidden=true;
  //this.route.params.subscribe((params:Params)=>this.hidden=params.hidden,(error)=>console.error(error));
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
      console.log(this._Clientservice.getterClients())
    },
    (error:ErrorHandler)=>{console.log(error);
    
    })
  }
}
