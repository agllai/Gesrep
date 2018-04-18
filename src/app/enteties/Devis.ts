import { Personnel } from "./Personnel";
import { Boutique } from "./Boutique";
import { Client } from "./Client";
import { Type_Panne } from "./Type_Panne";

export class Devis {
    DEid:number;
    commentaire:String;
    type_panne:Type_Panne;
    client:Client; 
    boutique: Boutique;
     date_heure:Date;
    createur:Personnel; 
    tarif:number;
}