import { Demande_Reparation } from "./Demande_Reparation";
import { Type_Panne } from "./Type_Panne";
import { Boutique } from "./Boutique";
import { Personnel } from "./Personnel";

export class Demande_Retour_Reparation{
    DRRid:number;
	demande_reparation :Demande_Reparation;
	panne:String;
	type_panne :Type_Panne;
	Designation:String;
	Creator :Personnel;
	date_heure:Date;
	Boutique :Boutique;
}