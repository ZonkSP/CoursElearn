import { Component } from '@angular/core';
import { cursos } from 'src/app/interfaces/cursos.interface';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-sign-in-curso',
  templateUrl: './sign-in-curso.component.html',
  styleUrls: ['./sign-in-curso.component.css']
})
export class SignInCursoComponent {

  constructor(private cursosService : CursosService){
    
  }

  public get cursos(): cursos[] {
    return this.cursosService.cursos;
  }

  public selectCurso(idCurso : number) : void {
    this.signInCurso(idCurso);
  }

  private signInCurso(idCurso : number) : void {
    this.cursosService.signInCurso(idCurso).subscribe(
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
