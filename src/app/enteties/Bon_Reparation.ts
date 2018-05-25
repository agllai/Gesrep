import { Article } from "./Article";
import { Client } from "./Client";
import { TypePanne } from "./Type_Panne";
import { DemandeReparation } from "./Demande_Reparation";
import { Personnel } from "./Personnel";

export class Bon_Reparation{

    Id_Bon_Réparation:number;
    demande_réparation :DemandeReparation;
    article:Article ;
    type_panne:TypePanne;
    Date_Récupération:Date;
    client:Client ;
    Réparateur:Personnel[] ;
    Créateur:Personnel;
    
}