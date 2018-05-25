import { Boutique } from "./Boutique";
import { DemandeReparation } from "./Demande_Reparation";
import { Article } from "./Article";
import { TacheReparation } from "./TacheReparation";

export class Encaissement{
    idEncaissement:number;
	boutique:Boutique;
	montantAvance:number;
	moyenPaiment:String ;
	reduction:number;
	montantPaye:number;
	demandeReparation : DemandeReparation;
	totalHT:number;
	article:Article;
	totalTTC:number;
	tva:number;
	resteAPaye:number;
	tarif:number;
	tacheRep:TacheReparation[];
	constructor() { }
}