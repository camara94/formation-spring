import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CertificatDetailComponent } from './certificat-detail/certificat-detail.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  { path: 'accueil', component: HomeComponent },
  { path: 'apropos', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'certificat', component: CertificatDetailComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
