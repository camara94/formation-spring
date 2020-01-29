import { CertificatService } from './../services/certificat.service';
import { Certificat } from './../shared/certificat';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  certificats:Certificat[];
  certificat:Certificat;

  constructor( private certificatService: CertificatService) { }

  ngOnInit() {
    this.certificats = this.certificatService.getCertificats();
  }

  onSelect(certificat: Certificat) {
    this.certificat = certificat;
  }

}
