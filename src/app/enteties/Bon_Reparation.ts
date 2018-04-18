import { Article } from "./Article";
import { Client } from "./Client";
import { Type_Panne } from "./Type_Panne";
import { Demande_Reparation } from "./Demande_Reparation";
import { Personnel } from "./Personnel";

export class Bon_Reparation{

    Id_Bon_Réparation:number;
    demande_réparation :Demande_Reparation;
    article:Article ;
    type_panne:Type_Panne;
    Date_Récupération:Date;
    client:Client ;
    Réparateur:Personnel[] ;
    Créateur:Personnel;
    
}