import { Component, OnInit } from '@angular/core';
import { Client } from '../../../enteties/Client';
import { ClientService } from '../../../Srevice/ClientService';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
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
  method:String;
    constructor(private _ClientService:ClientService,private _rotuer:Router) { 
      
    }
  
    ngOnInit() {
      this.client=this._ClientService.getter();
      this.client.typeClient="citizen";
      this._ClientService.CLientobserbale.next(this.client);
      this._ClientService.CLientobserbale.subscribe(
       (client:Client)=>{
         this.client=client;
         console.log(this.client,client);
       }
      )     
    }
    newClient():void{
      this.submitted = false;
      this.client=new Client();
    }
    private save():any{
     // if(this.method==="add"){
      return this._ClientService.createClient(this.client); 
      //console.log(this.client);
   // }
    //else{
    ///  return this._ClientService.updateClient(this.client);
    //}
    }
    private update():any{
      return this._ClientService.updateClient(this.client);
    }
    processForm(){

      if(this.client.idClient===undefined){
      this.data=this._ClientService.createClient(this.client).subscribe((client:Client)=>{
        console.log(client);
        this._rotuer.navigate(['../ListeClient']);
      },(error)=>{
        console.log(error);
      });
        console.log("saved");
      }else{
        console.log(this.client);
          this.data=this._ClientService.updateClient(this.client).subscribe((client:Client)=>{
            console.log(client);
            this._rotuer.navigate(['../ListeClient']);
          },(error)=>{
            console.log(error);
          });
        console.log("updated");
      }
     
      this._ClientService.CLientobserbale.next(this.client);
      console.log(this.data);
      this.submitted = true;
      setTimeout(() => {this.submitted=false;}, 4000);

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