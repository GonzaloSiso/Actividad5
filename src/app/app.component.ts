import { Component } from '@angular/core';
import { Noticia } from './interfaces/noticia.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  noticias: Noticia[] = [];

  constructor() {
    this.noticias = [
      {
        title: 'Openheimer',
        img: 'https://tse1.mm.bing.net/th?id=OIP.3YWwOTZjMFUidqz_xRiTOAHaEK&pid=Api&P=0&h=180',
        text: 'Con motivo del estreno de la nueva película de Christopher Nolan, es hora de adentrarse en la fascinante vida de J. Robert Oppenheimer, científico visionario y líder del Proyecto Manhattan, quien desempeñó un papel crucial en la creación de la primera bomba atómica.En 1942, durante la Segunda Guerra Mundial, Oppenheimer fue seleccionado para liderar el Proyecto Manhattan, un programa científico y militar destinado a construir una bomba atómica. Bajo su dirección, un grupo de científicos trabajó en el laboratorio secreto de Los Álamos, en el desierto de Nuevo México.Este demostró ser un gran líder, dirigió a su equipo y logró unir a científicos de diferentes disciplinas en un esfuerzo conjunto. Su visión y conocimientos teóricos fueron fundamentales para el éxito del proyecto.Después de años de intensa investigación y desarrollo, el proyecto culminó con éxito en la prueba Trinity el 16 de julio de 1945. La bomba atómica fue detonada en el desierto de Nuevo México, marcando el primer uso práctico de una bomba nuclear en la historia.',
        date: '10-07-23'
        
      },
      {
        title: 'Las excusas de los españoles para no ir a una mesa electoral',
        img: 'https://tse2.mm.bing.net/th?id=OIP.ndYjDA22zoBYp1eEMGKkvgHaEK&pid=Api&P=0&h=180',
        text: 'Un aluvión de solicitudes que comenzaron a presentarse la semana pasada y cuya resolución se publica cinco días después de haber registrado la alegación. Como novedad, este año –dado que las elecciones generales coinciden con el periodo de las vacaciones estivales– se contempla la posibilidad de quedar eximido de la mesa si se ha contratado un paquete vacacional antes de la convocatoria electoral, que fue el 30 de mayo. Pero no todas las excusas están vinculadas a las vacaciones. El perfil de las personas que presentan alegaciones en Madrid capital es variado, desde jubilados hasta jóvenes, pasando por mujeres embarazadas.Pedro Lafuente ha acudido a la JEZ de Madrid con la excusa de ser mayor de 65 años, uno de los requisitos más claros para no estar presente en la mesa electoral. “En cierto modo me he sentido halagado porque se han acordado de mí... nunca me había tocado”, señala a EFE al tiempo que Jesús, de mediana edad, explica que ha pedido ausentarse de la mesa como suplente porque lleva de baja casi un año por cinco lesiones en el brazo. “Yo estaba encantado. Es la primera vez que me toca, pero claro, uno se ve limitado y he tenido que tomar esta decisión”, incide.',
        date: '10-07-23'
      }
    ]
  }

  title: string = '';
  img: string = '';
  text: string = '';
  date: string = '';

  getNews($event: Noticia) {
    if ($event.title && $event.img && $event.text && $event.date) {
      this.noticias.push($event);
      this.title = '';
      this.img = '';
      this.text = '';
      this.date = '';
    } else {
      alert('Por favor, completa todos los campos del formulario.');
    }
  }

}

    