import { DemandeReparation } from "./Demande_Reparation";
import { TypePanne } from "./Type_Panne";
import { Boutique } from "./Boutique";
import { Personnel } from "./Personnel";

export class Demande_Retour_Reparation{
    DRRid:number;
	demande_reparation :DemandeReparation;
	panne:String;
	type_panne :TypePanne;
	Designation:String;
	Creator :Personnel;
	date_heure:Date;
	Boutique :Boutique;
}