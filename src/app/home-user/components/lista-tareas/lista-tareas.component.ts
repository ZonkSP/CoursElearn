import { Component } from '@angular/core';
import { cursos } from 'src/app/interfaces/cursos.interface';
import { Enrollment } from 'src/app/interfaces/enrollment.interface';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent {

  public searchTerm: string = "";
  public tasks : any;

  //-----------Consulta del servicio
  constructor(private cursosService: CursosService) {
    this.getCursoStudent();
  }

  public get cursos(): cursos[] {
    return this.cursosService.cursos;
  }
  //----------Consulta del servicio

  public get selectedCursoStudent() : Enrollment | undefined {
    //return this.cursosService.getStudentCurso();
    return this.cursosService.getCursoSelected();
  }

  private getCursoStudent() : void {
    this.cursosService.fetchCursosUserStudentFromApi().subscribe(
      {
        next: (response: any) => {
          console.log(response);
          this.cursosService.cursosStudent = response.enroll;
        },
        error: (error: any) => {
          console.log(error);

        }
      }
    )
  }
}
