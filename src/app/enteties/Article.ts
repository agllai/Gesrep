import {Boutique} from '../enteties/Boutique';
import {Operateur} from '../enteties/Operateur';
import { Demande_Reparation } from './Demande_Reparation';
export class Article{
    idArticle:number;
    serialNumber:String;
	marque:string;
	model:string ;
	boutique:Boutique;
	operateur:Operateur;
	reparation:Demande_Reparation;
	livraison:Boolean;
	dateRecuperation:Date;
	commentaire:String;
	designation:String;
	codeSecurite:String;
	constructor(){}
}