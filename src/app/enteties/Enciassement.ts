import { Boutique } from "./Boutique";
import { Demande_Reparation } from "./Demande_Reparation";
import { Article } from "./Article";

export class Encaissement{
    Id_Encaissement:number;
	Boutique:Boutique;
	Montant_avance:number;
	Moyen_paiment:String ;
	Réduction:number;
	Montant_paye:number;
	Demande_Reparation : Demande_Reparation;
	Total_HT:number;
	article:Article;
	Total_TTC:number;
	TVA:number;
	Reste_a_Paye:number;
	tarif:number;

}