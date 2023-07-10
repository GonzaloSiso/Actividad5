//librerias
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//componentes
import { AppComponent } from './app.component';
import { ListaNoticiasComponent } from './components/lista-noticias/lista-noticias.component';
import { FormNewsComponent } from './components/form-news/form-news.component';



@NgModule({
  declarations: [
    AppComponent,
    ListaNoticiasComponent,
    FormNewsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
