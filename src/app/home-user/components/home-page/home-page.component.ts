import { Component } from '@angular/core';
import { cursos } from 'src/app/interfaces/cursos.interface';
import { Enrollment } from 'src/app/interfaces/enrollment.interface';
import { User } from 'src/app/interfaces/usuarios.interface';
import { CursosService } from 'src/app/services/cursos.service';
import { UsersService } from 'src/app/services/users.service';
import { ICONOS, ICONOS_REGULAR } from 'src/assets/icons';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent{

  icon = ICONOS;
  icon_regular = ICONOS_REGULAR;

  public typeInformation : number = 0;

  //-----------Consulta del servicio
  constructor(private cursosService: CursosService, private userService : UsersService) {
    this.getInfoUser();
    this.searchCursos();
    this.getCursoStudent();
  }

  public get cursos(): cursos[] {
    return this.cursosService.cursos;
  }
  //----------Consulta del servicio

  //obtencion de un curso en general de todos los cursos existentes. VER >> cursos.service
  //funciona con la variable que almacena la seleccion de los cursos por parte del usuario.
  public get oneCurso() : cursos {
    return this.cursosService.getSelectedCurso();
  }

  //obtiene todos los cursos del alumno
  public get cursosStudent() : Enrollment[] {
    return this.cursosService.cursosStudent;
  }

  //Se obtiene el curso seleccionado por el alumno, por defecto array[0]
  public get selectedCursoStudent() : Enrollment | undefined {
    //return this.cursosService.getStudentCurso();
    return this.cursosService.getCursoSelected();
  }

  //obtiene el curso seleccionado >>> ver cursos.service
  public get ActivateCurso() : number {
    return this.cursosService.getCurso;
  }

  public deleteCurso(idCurso : number) : void {
    this.signOutCurso(idCurso);
  }

  public get informationStudent() : User{
    return this.userService.infoUser;
  }

  //obtiene la informacion del usuario
  private getInfoUser() : void {
    this.userService.getInfoUser().subscribe(
      {
        next: (response: any) => {
          console.log(response);
          this.userService.infoUser = response.userInfo;
        },
        error: (error: any) => {
          console.log(error);

        }
      }
    )
  }

  //obtiene la informacion de los cursos del estudiante
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

  //Desuscribirse del curso
  private signOutCurso(idCurso : number) : void {
    this.cursosService.signOutCurso(idCurso).subscribe(
      {
        next: (response: any) => {
          console.log(response);
        },
        error: (error: any) => {
          console.log(error);

        }
      }
    )
  }

  //Obtencion de todos los cursos
  private searchCursos(searchTerm: string = ""): void {
    this.cursosService.fetchCursosFromApi(searchTerm).subscribe(
      {
        next: (response: any) => {
          console.log(response);
          this.cursosService.cursos = response.cursosList;
        },
        error: (error: any) => {
          console.log(error);

        }
      }
    )
  }
}
