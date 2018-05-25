import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../../enteties/Article';
import { Piece } from '../../../enteties/Piece';
import { Composant } from '../../../enteties/Composant';
import { TacheReparation } from '../../../enteties/TacheReparation';

@Component({
  selector: 'app-list-tache-reparation',
  templateUrl: './list-tache-reparation.component.html',
  styleUrls: ['./list-tache-reparation.component.css']
})
export class ListTacheReparationComponent implements OnInit {
  @Input() listTacheRep:TacheReparation[];
  constructor() { }

  ngOnInit() {
  }

}
