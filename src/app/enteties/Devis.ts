import { Personnel } from "./Personnel";
import { Boutique } from "./Boutique";
import { Client } from "./Client";
import { TypePanne } from "./Type_Panne";

export class Devis {
    DEid:number;
    commentaire:String;
    typePanne:TypePanne;
    client:Client; 
    boutique: Boutique;
     dateHeure:Date;
    createur:Personnel; 
    tarif:number;
}