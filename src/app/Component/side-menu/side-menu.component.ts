import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
public activelink:String="/";
  constructor() { }

  ngOnInit() {
  }
onclick(active:String){
this.activelink=active;
}
isactive(link:String):String{
  if(link!==this.activelink){  
  return "";}
  else{
    return "active";
  }
}
}
