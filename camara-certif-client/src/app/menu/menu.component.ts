import { CERTIFICAT } from './../app.component';
import { Certificat } from './../shared/certificat';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  certificats: Certificat[] = CERTIFICAT;
  certificat:Certificat;

  constructor() { }

  ngOnInit() {
  }

  onSelect(certificat: Certificat) {
    this.certificat = certificat;
  }

}
