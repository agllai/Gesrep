import { Component, OnInit } from '@angular/core';
import { Client } from '../../../enteties/Client';
import { ClientService } from '../../../Srevice/ClientService';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { NgForm, NgModel } from '@angular/forms';

import { FormGroup, FormControl, FormControlDirective, Validators } from '@angular/forms';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  client:Client=new Client();
  submitted = false;
  data:any;
  //adresse:String;
  method:String;
  clientForm:FormGroup;
  numtel=new FormControl(
    this.client.numtel,
    [Validators.maxLength(13),
      Validators.minLength(8),
      Validators.required,
      Validators.pattern("(9|7|5|4|2){1}[0-9]{7}")
    ]);
 email=new FormControl(this.client.mail,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,4}"));
  nom= new FormControl(this.client.nom,[ Validators.required,Validators.minLength(4),Validators.maxLength(20),Validators.pattern("[a-zA-Z]+")]);
  adresse= new FormControl(this.client.adresse,[Validators.minLength(15),Validators.maxLength(50),Validators.pattern("^[0-9.]+[a-zA-Z]+")]);
   typeClient= new FormControl(this.client.typeClient,Validators.required) ;

    constructor(private _ClientService:ClientService,private _rotuer:Router) { 
      
    }
  
    ngOnInit() {
      this.clientForm=new FormGroup({
        'numtel':this.numtel,
       // 'email':new FormControl(this.client.mail,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}")),
       'email':this.email,
       
        'nom':this.nom,
        'adresse': this.adresse,
         'typeClient': this.typeClient
      });
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