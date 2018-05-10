import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../Srevice/ClientService';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { Client } from '../../../enteties/Client';
import { ErrorHandler } from '@angular/router/src/router';

@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.css']
})
export class ListeClientComponent implements OnInit {
  clients:Client[];
  constructor(private _Clientservice:ClientService,private _router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.getClients();
  }
  deleteClient(client:Client){
    this._Clientservice.deleteClient(client.idClient).subscribe((data)=>{
       // console.log("data:",data);
this.getClients();                                                                                               

this._router.navigate(["../ListeClient"]);

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
