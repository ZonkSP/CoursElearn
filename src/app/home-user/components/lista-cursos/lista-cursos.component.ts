import { Component } from '@angular/core';
import { cursos } from 'src/app/interfaces/cursos.interface';
import { Enrollment } from 'src/app/interfaces/enrollment.interface';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent {

  public searchTerm: string = "";
  public cursoId : number = 0;

  //-----------Consulta del servicio
  constructor(private cursosService: CursosService) {

  }

  public get cursos(): cursos[] {
    return this.cursosService.cursos;
  }
  //----------Consulta del servicio

  public selectCurso(cursoID : number) : void {
    this.cursosService.changeCurso = cursoID;
  }

  public get activeCurso() : number {
    return this.cursosService.getCurso;
  }

  public get selectedCursoStudent() : Enrollment | undefined {
    //return this.cursosService.getStudentCurso();
    return this.cursosService.getCursoSelected();
  }

  public get cursosStudent() : Enrollment[] {
    return this.cursosService.cursosStudent;
  }
}
