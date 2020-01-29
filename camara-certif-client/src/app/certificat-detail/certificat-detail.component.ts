import { Component, OnInit } from '@angular/core';
import { Certificat } from './../shared/certificat';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CertificatService } from './../services/certificat.service';

@Component({
  selector: 'app-certificat-detail',
  templateUrl: './certificat-detail.component.html',
  styleUrls: ['./certificat-detail.component.scss']
})
export class CertificatDetailComponent implements OnInit {
  certificat:Certificat;
  constructor( private certificatService: CertificatService,
    private route: ActivatedRoute,
    private location: Location) { }


  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.certificat = this.certificatService.getCertificat(+id);
  }

  goBack(): void {
    this.location.back();
  }
}
