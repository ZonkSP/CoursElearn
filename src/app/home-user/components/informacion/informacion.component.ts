import { Component } from '@angular/core';
import { cursos } from 'src/app/interfaces/cursos.interface';
import { Enrollment } from 'src/app/interfaces/enrollment.interface';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent {

  //-----------Consulta del servicio
  constructor(private cursosService: CursosService) {}

  public get cursos(): cursos[] {
    return this.cursosService.cursos;
  }
  //----------Consulta del servicio

  public get oneCurso() : cursos {
    return this.cursosService.getSelectedCurso();
  }

  public get selectedCursoStudent() : Enrollment | undefined {
    return this.cursosService.getStudentCurso();
  }
}
