import { Injectable } from '@angular/core';
import { Certificat } from './../shared/certificat';
import { CERTIFICAT } from './../app.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CertificatService {

  public host = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getCertificats(url: string): any {
    return this.http.get(this.host + url);
  }

  getCertificat(id: number): any {
    return this.http.get(this.host+'/certificats/' + id);
  }

}
