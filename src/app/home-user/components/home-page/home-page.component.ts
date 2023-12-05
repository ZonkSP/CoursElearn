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

  public get oneCurso() : cursos {
    return this.cursosService.getSelectedCurso();
  }

  public get cursosStudent() : Enrollment[] {
    return this.cursosService.cursosStudent;
  }

  public get selectedCursoStudent() : Enrollment | undefined {
    //return this.cursosService.getStudentCurso();
    return this.cursosService.getCursoSelected();
  }

  public get ActivateCurso() : number {
    return this.cursosService.getCurso;
  }

  public deleteCurso(idCurso : number) : void {
    this.signOutCurso(idCurso);
  }

  public get informationStudent() : User{
    return this.userService.infoUser;
  }

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
