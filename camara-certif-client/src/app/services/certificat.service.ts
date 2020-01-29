import { Injectable } from '@angular/core';
import { Certificat } from './../shared/certificat';
import { CERTIFICAT } from './../app.component';

@Injectable({
  providedIn: 'root'
})
export class CertificatService {

  constructor() { }

  getCertificats(): Certificat[] {
    return CERTIFICAT;
  }

}
