import { Component, EventEmitter, Output } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-form-news',
  templateUrl: './form-news.component.html',
  styleUrls: ['./form-news.component.css']
})
export class FormNewsComponent {
  @Output() noticiaEmitida: EventEmitter<Noticia>
  newNews: Noticia = { title: "", date: "", img: "", text: "" };

  constructor() {
    this.noticiaEmitida = new EventEmitter();
  }
  getDataForm() {
    
    this.noticiaEmitida.emit(this.newNews);
    this.newNews = { title: "", date: "", img: "", text: ""  };
  }
}
