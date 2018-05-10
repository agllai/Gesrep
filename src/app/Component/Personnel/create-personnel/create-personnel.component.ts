import { Component, OnInit } from '@angular/core';
import { Personnel } from '../../../enteties/Personnel';
import { PersonnelService } from '../../../Srevice/personnel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-personnel',
  templateUrl: './create-personnel.component.html',
  styleUrls: ['./create-personnel.component.css']
})
export class CreatePersonnelComponent implements OnInit {

  personnel: Personnel=new Personnel();
  private data:any;
  submitted = false;
  profile:Boolean = false;
  
    constructor(private _PersonnelService:PersonnelService ,private _rotuer:Router) { }
  
    ngOnInit() {
      this.personnel=this._PersonnelService.getter();
     
    }
    private save():any{
      return this._PersonnelService.createPersonnel(this.personnel);
     
    }
    processForm(personnel:Personnel)
    {
        this.data=this.save();
        console.log(this.data);
       
      
        this.submitted = true;
        console.log(this._PersonnelService.getter());
        
        
    }
    changeprofile(){
      if(this.personnel.profile="reparateur"){
        this.profile=true;
      }
    }
  }

