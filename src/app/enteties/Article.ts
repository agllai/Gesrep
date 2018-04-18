import {Boutique} from '../enteties/Boutique';
import {Operateur} from '../enteties/Operateur';
import {Reparation} from '../enteties/Reparation';
export class Article{
    Id_Article:number;
    Serial_Number:String;
	Marque:String;
	Model:String ;
	boutique:Boutique=new Boutique();
	operateur:Operateur;
	reparation :Reparation;
	Livraison:Boolean;
	Date_récupération:Date;
	commentaire:String;
	Code_Securite:String;
}