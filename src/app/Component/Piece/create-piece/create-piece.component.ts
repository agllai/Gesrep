import { Component, OnInit } from '@angular/core';
import { Encaissement } from '../../../enteties/Enciassement';
import { PaymentService } from '../../../Srevice/payment.service';
import { Router } from '@angular/router';
import { Article } from '../../../enteties/Article';
import { ArticleService } from '../../../Srevice/article-service.service';
import { Piece } from '../../../enteties/Piece';
import { PieceService } from '../../../Srevice/piece.service';

@Component({
  selector: 'app-create-piece',
  templateUrl: './create-piece.component.html',
  styleUrls: ['./create-piece.component.css'],
  providers:[PieceService]
})
export class CreatePieceComponent implements OnInit {

  piece: Piece=new Piece();
  private data:any;
  submitted = false;
  
    constructor(private _PieceService:PieceService ,private _rotuer:Router) { }
  
    ngOnInit() {
      this.piece=this._PieceService.getter();
     
    }
    private save():any{
      return this._PieceService.createPiece(this.piece).subscribe(
        (piece:Piece)=>{
          console.log(piece);this._rotuer.navigate(["../listPiece"]);
        }
      ),(error:any)=>{
        console.log(error);
      }
     
    }
    processForm(piece:Piece)
    {
        this.data=this.save();
        console.log(this.data);
       
      
        this.submitted = true;
        console.log(this._PieceService.getter());
        
        
    }
  }