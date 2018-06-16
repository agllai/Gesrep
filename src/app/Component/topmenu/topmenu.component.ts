import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent implements OnInit {
@Output() navbartoggle = new EventEmitter<Boolean>();
  nav:Boolean=true;
constructor() { }

  ngOnInit() {
  }
navbar(){
  this.nav=!this.nav;
this.navbartoggle.emit(this.nav);
}
}
