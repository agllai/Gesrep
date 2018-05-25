import {Boutique} from '../enteties/Boutique';
import {Operateur} from '../enteties/Operateur';
import { DemandeReparation } from './Demande_Reparation';
import { Piece } from './Piece';
export class Article{
    idArticle:number;
    serialNumber:String;
	marque:string;
	model:string ;
	boutique:Boutique;
	operateur:Operateur;
	reparation:DemandeReparation;
	livraison:Boolean;
	dateRecuperation:Date;
	commentaire:String;
	designation:String;
	codeSecurite:String;
	piece:Piece;
	constructor(){}
}