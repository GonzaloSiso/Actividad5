import { Component, Input } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.css']
})
export class ListaNoticiasComponent {
  //@Input de misProductos
  @Input() misNoticias: Noticia[] = []

  cargarNoticias(): string {

    let html = "";
    this.misNoticias.forEach(Noticia => {
      html += ` <article class="noticia">
                  <img src="${Noticia.img}" alt="${Noticia.title}">
                  <h2>${Noticia.title}</h2>
                  <h3>${Noticia.date}</h3>
                  <p>${Noticia.text}</p>
                </article>`
    })

    return html;
  }
}
