import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../Srevice/ClientService';
import { Router } from '@angular/router';
import { Client } from '../../../enteties/Client';
import { ErrorHandler } from '@angular/router/src/router';
import { Piece } from '../../../enteties/Piece';
import { PieceService } from '../../../Srevice/piece.service';

@Component({
  selector: 'app-list-piece',
  templateUrl: './list-piece.component.html',
  styleUrls: ['./list-piece.component.css']
})
export class ListPieceComponent implements OnInit {
 public pieces:Piece[]=[];
 piece:Piece=new Piece();
 p: number = 1;
 size:number=1;
 IPP:number=5;
  key:string="idEncaissement";
   reverse: boolean = false;
   filter:string;
   sort(key){
     this.key = key;
     this.reverse = !this.reverse;}
  
  constructor(private _Pieceservice:PieceService,private _rotuer:Router) { }

  ngOnInit() {
    this._Pieceservice.getPiece().subscribe((pieces:Piece[])=>{
      console.log(pieces);
      this.pieces=pieces;
      console.log(this._Pieceservice.getterPieces())
    },
    (error:ErrorHandler)=>{console.log(error);
    
    })
  }
  newPiece(){

  }
}