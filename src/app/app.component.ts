import { Component, ViewChild, OnInit} from '@angular/core';
import {ResponceWrapperComponent} from '../app/Component/responce-wrapper/responce-wrapper.component';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  navbar:string="active";
  main:string="active";
 togglenav:Boolean;
ngOnInit(){
  this.navbar="";
  this.main="";
}
 togglednav(togglena:Boolean){
if(togglena){
  this.navbar="active";
  this.main="active";
}else{
  this.navbar="";
  this.main="";
}
 }
}
