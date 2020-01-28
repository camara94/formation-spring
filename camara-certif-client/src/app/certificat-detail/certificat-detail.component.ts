import { Component, OnInit } from '@angular/core';
import { CERTIFICAT } from './../app.component';
import { Certificat } from './../shared/certificat';

@Component({
  selector: 'app-certificat-detail',
  templateUrl: './certificat-detail.component.html',
  styleUrls: ['./certificat-detail.component.scss']
})
export class CertificatDetailComponent implements OnInit {
  selectedCertificat:Certificat = CERTIFICAT[1];
  constructor() { }

  ngOnInit() {
  }

}
