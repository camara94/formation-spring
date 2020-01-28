import { Component } from '@angular/core';
import { Certificat } from './shared/certificat';

export const CERTIFICAT:Certificat[] = [
    {
      "id": 1,
      "numCert": "n° 5889878715",
      "titre": "Apprenez à programmer en C !",
      "description": "J'ai étudié le fonctionnement de la mémoire, des variables, des conditions et des boucles. Puis j'ai appris à réutiliser tout ce que j'ai appris pour créer des interfaces graphiques avec la bibliothèque SDL (jeux vidéo, animations audio...). Enfin, j'ai appris à manipuler les structures de données les plus courantes pour organiser les informations en mémoire : listes, piles, files, tables de hachage",
      "auteur": "Mathieu Nebra",
      "dateCertif": "2018-06-01 00:00:00",
      "url": "https://openclassrooms.com/fr/course-certificates/5889878715",
      "universite": "OPENCLASSROOMS",
      "urlpng": "https://camaratek.com/api/images/certif/openclassrooms/pdf2png/open7-1.png"
    },
    {
      "id": 2,
      "numCert": "n° 3129011750",
      "titre": "Concevez votre site web avec PHP et MySQL",
      "description": "Dans ce j'ai appris à : -Installer les outils propres à PHP (serveur web, logiciel de gestion de base de données) -Respecter les conventions d'écriture de code -Programmer des fonctions -Ecrire des instructions en PHP -Enregistrer des données dans un fichier -Stocker des données dans les sessions et les cookies -Transmettre des données -Ecrire des fonctions SQL basiques -Communiquer avec la base de données -Utiliser les expressions régulières en PHP",
      "auteur": "Mathieu Nebra",
      "dateCertif": "2018-03-24 00:00:00",
      "url": "https://openclassrooms.com/fr/course-certificates/3129011750",
      "universite": "OPENCLASSROOMS",
      "urlpng": "https://camaratek.com/api/images/certif/openclassrooms/pdf2png/open22-1.png"
    },
    {
      "id": 4,
      "numCert": "n° 6352202321",
      "titre": "Apprenez à développer en C#",
      "description": "Dans ce cours, j'ai maîtrisé les bases de la programmation en C# et j'ai su créer une application capable d'interagir avec un utilisateur, de lire ses saisies au clavier et d'afficher des choses à l'écran via une console",
      "auteur": "Nicolas Hilaire",
      "dateCertif": "2018-10-28 01:00:00",
      "url": "https://openclassrooms.com/fr/course-certificates/6352202321",
      "universite": "OPENCLASSROOMS",
      "urlpng": "https://camaratek.com/api/images/certif/openclassrooms/pdf2png/open11-1.png"
    },
    {
      "id": 5,
      "numCert": "n° 8517988674",
      "titre": "Apprenez à créer votre site web avec HTML5 et CSS3",
      "description": "Dans ce cours, j'ai été capable de : -Utiliser du code HTML -Structurer une page web en HTML -Utiliser du code CSS -Mettre en forme une page web en CSS -Organiser les éléments dune page Web grâce au CSS -Modifier l'agencement d'une page HTML avec CSS -Intégrer des formules dans une page web -Adapter une page pour les petites résolutions en CSS",
      "auteur": "Mathieu Nebra",
      "dateCertif": "2018-03-29 00:00:00",
      "url": "https://openclassrooms.com/fr/course-certificates/8517988674",
      "universite": "OPENCLASSROOMS",
      "urlpng": "https://camaratek.com/api/images/certif/openclassrooms/pdf2png/open14-1.png"
    }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'camara-certif-client';
}
