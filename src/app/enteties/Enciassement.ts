import { Boutique } from "./Boutique";
import { Demande_Reparation } from "./Demande_Reparation";
import { Article } from "./Article";
import { Tache_Reparation } from "./Tache_Reparation";

export class Encaissement{
    idEncaissement:number;
	boutique:Boutique;
	montantAvance:number;
	moyenPaiment:String ;
	reduction:number;
	montantPaye:number;
	demandeReparation : Demande_Reparation;
	totalHT:number;
	article:Article;
	totalTTC:number;
	tva:number;
	resteAPaye:number;
	tarif:number;
	tacheRep:Tache_Reparation[];
	constructor() { }
}