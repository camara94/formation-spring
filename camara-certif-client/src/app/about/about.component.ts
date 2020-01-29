import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatHeaderCell, MatCellDef} from '@angular/material';
import { MatColumnDef } from '@angular/material';

export interface PeriodicElement {
  periode: string;
  entreprise: string;
  type: string;
  realisation: string;
  ville:string;
  pays:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    periode: '15 Jan - 09 Feb 2019', 
    entreprise: 'Tangorythm', 
    type: 'Stage de Perfectionnement', 
    realisation: 'Réalisation de la version 1.9 de l\'application mobile BnB Tunisie,réaliser en Ionic et cordova. Une application permettant aux annonceurs de vendre, mettre en location leurs bien immoboliers. ',
    ville: 'Djerba',
    pays: 'Tunisie'
  },
  {
    periode:'02-Jan 02-Fev 2017', 
    entreprise: 'Création d\'une chaine Youtube', 
    type: 'Création d\'une chaine Youtube', 
    realisation: 'Une chaîne pour aider les étudiants en informatique à résoudre leurs exercices et tout en leurs accompagnants gratuitement dans leurs projets c\'est une façon pour moi de participer à la lutte contre l\'ignorance ',
    ville: 'Djerba',
    pays: 'Tunisie'
  },
  {
    periode: '02-Jan 02-Fev 2017', 
    entreprise: 'Utopixar', 
    type: 'Stage d\'Initiation ', 
    realisation: 'Création du site statique de l\'entreprise Utopixar avec HTML5/CSS3 et Bootstrap. Création et installation d\'une machine virtuelle Ubuntu version 32 bits . Utilisation des outils professionnels de collaboration et de stockage : GoogleDrive TeamViewer Hangouts Maintenance des appareilles',
    ville: 'Tunis',
    pays: 'Tunisie'
  }
  
];

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  displayedColumns: string[] = ['periode', 'entreprise', 'type', 'realisation', 'ville', 'pays'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }



}
