import { Etat } from "./Etat";
import { Article } from "./Article";
import { DemandeReparation } from "./Demande_Reparation";
import { Personnel } from "./Personnel";
import { Composant } from "./Composant";
import { Encaissement } from "./Enciassement";

export class TacheReparation{
IdTacheReparation:number;
	 
etat:Etat ;
	 
article:Article;
	 

demande_deparation:DemandeReparation;
	 
Reparateur: Personnel[] ;
Createur:Personnel ;
 Panne:String;

Composant:Composant;
Description:String;

Encaissement :Encaissement;



}