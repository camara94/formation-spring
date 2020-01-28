import { Component, OnInit, Input } from '@angular/core';
import { Certificat } from './../shared/certificat';

@Component({
  selector: 'app-certificat-detail',
  templateUrl: './certificat-detail.component.html',
  styleUrls: ['./certificat-detail.component.scss']
})
export class CertificatDetailComponent implements OnInit {
  @Input()
  certificat:Certificat;
  constructor() { }

  ngOnInit() {
    //console.log(this.certificat);
  }

}
