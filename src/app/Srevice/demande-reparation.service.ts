import { Injectable } from '@angular/core';
import { DemandeReparation } from '../enteties/Demande_Reparation';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class DemandeReparationService {
private demandeReparation:DemandeReparation=new DemandeReparation();
FicheRepobserbale=new Subject();
  constructor(
    private httpClient:HttpClient
  ) { }
getter(){
  return this.demandeReparation;
}
}
