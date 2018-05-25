import { TypePanne } from "./Type_Panne";
import { Client } from "./Client";
import { Boutique } from "./Boutique";
import { Personnel } from "./Personnel";

export class DemandeReparation{
    DRid:number;
    Rid:number;
    Designation:String;
    typePanne:TypePanne[];
    client:Client; 
    boutique: Boutique;
     date_heure:Date;
    createur:Personnel; 
    constructor(){}
}