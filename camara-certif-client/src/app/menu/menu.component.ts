import { CertificatService } from './../services/certificat.service';
import { Certificat } from './../shared/certificat';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  certificats:any;
  certificat:Certificat;

  constructor( private certificatService: CertificatService) { }

  ngOnInit() {
    ///this.certificats = this.certificatService.getCertificats();

    this.certificatService.getCertificats('/certificats')
      .subscribe( data => {this.certificats = data, console.log(data)}, err=>console.error(err));

  }

  onSelect(certificat: Certificat) {
    this.certificat = certificat;
  }

}
