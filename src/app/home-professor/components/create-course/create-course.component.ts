import { Component } from '@angular/core';
import { cursos } from 'src/app/interfaces/cursos.interface';
import { User } from 'src/app/interfaces/usuarios.interface';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent {

  // Información de ejemplo para un profesor y estudiantes
  public teacher: User = {
    name: "Nombre del Profesor",
    email: "profesor@example.com",
    password: "password",
    role: "professor",
    profile: {
      photo: "url_de_la_foto",
      bio: "Descripción del profesor"
    }
  };
  public cursoEntry: cursos =
    {
      "id": 0,
      "title": "cola",
      "description": "description",
      "materials": [
        "Recetas",
        "Recursos en línea",
        "Platillos"
      ],
      "videos": [
        "Video de introducción",
        "Lección 1: Conceptos básicos",
        "Lección 2: Tipo de comida"
      ],
      "teacher": this.teacher,
      "tasks": [
        {
          "id": 'any',
          "title": "Tarea 1: Ejercicios de pozole",
          "description": "hacer pozole",
          "dueDate": "2023-12-01T08:00:00.000Z",
          "completedBy": []
        },
        {
          "id": 'any',
          "title": "Tarea 2: Historia del elote",
          "description": "Hacer un trole",
          "dueDate": "2023-12-15T08:00:00.000Z",
          "completedBy": []
        }
      ]
    }
  constructor(private cursoService: CursosService) {

  }

  public crearCurso(curso: cursos): void {
    this.crearNuevoCurso(curso);
  }

  private crearNuevoCurso(curso: cursos): void {
    this.cursoService.createCurso(curso).subscribe(
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
