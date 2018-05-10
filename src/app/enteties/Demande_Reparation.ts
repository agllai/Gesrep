import { Type_Panne } from "./Type_Panne";
import { Client } from "./Client";
import { Boutique } from "./Boutique";
import { Personnel } from "./Personnel";

export class Demande_Reparation{
    DRid:number;
    Rid:number;
    Designation:String;
    type_panne:Type_Panne[];
    client:Client; 
    boutique: Boutique;
     date_heure:Date;
    createur:Personnel; 
    constructor(){}
}