import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../../Srevice/ClientService';
import { Client } from '../../enteties/Client';

@Component({
  selector: 'app-demohello',
  templateUrl: './demohello.component.html',
  styleUrls: ['./demohello.component.css']
})
export class DemohelloComponent implements OnInit {
clients:Client[];
  constructor(private _Clientservice:ClientService,private _rotuer:Router) { }

  ngOnInit(){
    this._Clientservice.getclient().subscribe((clients:Client[])=>{
      console.log(clients[1]);
      this.clients=clients;
    },
    (error)=>{console.log(error);
    
    })


  
  }

}
