import { Component, OnInit, ErrorHandler } from '@angular/core';
import { Personnel } from '../../../enteties/Personnel';
import { PersonnelService } from '../../../Srevice/personnel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-personnel',
  templateUrl: './list-personnel.component.html',
  styleUrls: ['./list-personnel.component.css']
})
export class ListPersonnelComponent implements OnInit {

  public personnels:Personnel[]=[];
  constructor(private _Personnelservice:PersonnelService,private _rotuer:Router) { }

  ngOnInit() {
    this._Personnelservice.getPersonnels().subscribe((personnels:Personnel[])=>{
      console.log(personnels);
      this.personnels=personnels;
      console.log(this._Personnelservice.getterPersonnels())
    },
    (error:ErrorHandler)=>{console.log(error);
    
    })
  }
}
