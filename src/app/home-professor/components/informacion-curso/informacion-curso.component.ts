import { Component } from '@angular/core';
import { cursos } from 'src/app/interfaces/cursos.interface';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-informacion-curso',
  templateUrl: './informacion-curso.component.html',
  styleUrls: ['./informacion-curso.component.css']
})
export class InformacionCursoComponent {

  //-----------Consulta del servicio
  constructor(private cursosService: CursosService) {
  }

  //----------Consulta del servicio

  public get selecInfCurso() : cursos {
    return this.cursosService.getSelectedCurso();
  }

}
