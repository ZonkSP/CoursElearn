import { Component } from '@angular/core';
import { cursos } from 'src/app/interfaces/cursos.interface';
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

  public get infCursos() : cursos[]{
    return this.cursosService.cursos;
  }
}
