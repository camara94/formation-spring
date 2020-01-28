import { CERTIFICAT } from './../app.component';
import { Certificat } from './../shared/certificat';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  Certificats: Certificat[] = CERTIFICAT;

  constructor() { }

  ngOnInit() {
    console.log(this.Certificats);
  }

}
