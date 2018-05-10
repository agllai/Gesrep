import { Component, OnInit } from '@angular/core';
import { Client } from '../../../enteties/Client';
import { ClientService } from '../../../Srevice/ClientService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  client:Client=new Client();
  submitted = false;
  data:any;
  adresse:String;
    constructor(private _ClientService:ClientService,private _rotuer:Router) { 
      
    }
  
    ngOnInit() {
      this.client=this._ClientService.getter();
      this.client.typeClient="citizen";
    }
    newClient():void{
      this.submitted = false;
      this.client=new Client();
    }
    private save():any{
      return this._ClientService.createClient(this.client);
      //console.log(this.client);
    }
    processForm(){
    //  this.reswrap.client=this.client;
      //this.reswrap.article=this.article;
      
     
      this.data=this.save();
      console.log(this.data);
      this.submitted = true;
     // this._rotuer.navigate(["\rw"]);
      /*this._ClientService.createClient(client).subscribe((client)=>{
        console.log(client);
        this._rotuer.navigate(['/rw']);
      },(error)=>{
        console.log(error);
      });
      */
    }
  }