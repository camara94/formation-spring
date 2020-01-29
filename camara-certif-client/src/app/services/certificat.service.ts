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

  getCertificat(id: number): Certificat {
    //return CERTIFICAT.some(cert => {cert.id === id})[0];
    let c: Certificat = null;
    CERTIFICAT.forEach((cert)=> {
      if (cert.id == id) {
        c=cert;
      }
    });
    return c;
  }

}
