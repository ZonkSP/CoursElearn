import { Component } from '@angular/core';
import { cursos } from 'src/app/interfaces/cursos.interface';
import { User } from 'src/app/interfaces/usuarios.interface';
import { CursosService } from 'src/app/services/cursos.service';
import { UsersService } from 'src/app/services/users.service';
import { ICONOS, ICONOS_REGULAR } from 'src/assets/icons';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageProfessorComponent {
  icon = ICONOS;
  icon_regular = ICONOS_REGULAR;

  public typeInformation : number = 0;
  
  constructor(private userService : UsersService, private cursoService : CursosService){
    this.getInfoUser();
    this.getCursosProfessor();
  }

  public get informationProffesor() : User{
    return this.userService.infoUser;
  }

  public get infCursos() : cursos[]{
    return this.cursoService.cursos;
  }

  public get selectInfCurso() : cursos{
    return this.cursoService.getSelectedCurso();
  }

  public deleteCourse(idCurso : number) : void{
    this.deleteCurso(idCurso);
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

  private getCursosProfessor() : void {
    this.cursoService.fetchCursosUserProfessorFromApi().subscribe(
      {
        next: (response: any) => {
          console.log(response);
          this.cursoService.cursos = response.cursosListFromProfessor;
        },
        error: (error: any) => {
          console.log(error);

        }
      }
    )
  }

  private deleteCurso(idCurso : number) : void {
    this.cursoService.deleteCurso(idCurso).subscribe(
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

  
}
