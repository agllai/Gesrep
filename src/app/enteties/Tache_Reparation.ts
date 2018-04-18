import { Etat } from "./Etat";
import { Article } from "./Article";
import { Demande_Reparation } from "./Demande_Reparation";
import { Personnel } from "./Personnel";
import { Composant } from "./Composant";
import { Encaissement } from "./Enciassement";

export class Tache_Reparation{
Id_Tache_Réparation:number;
	 
etat:Etat ;
	 
article:Article;
	 

demande_deparation:Demande_Reparation;
	 
Reparateur: Personnel[] ;
Createur:Personnel ;
 Panne:String;

Composant:Composant;
Description:String;

Encaissement :Encaissement;



}