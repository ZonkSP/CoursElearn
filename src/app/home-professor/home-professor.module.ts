import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageProfessorComponent } from './components/home-page/home-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { InformacionCursoComponent } from './components/informacion-curso/informacion-curso.component';



@NgModule({
  declarations: [
    HomePageProfessorComponent,
    CreateCourseComponent,
    ListaCursosComponent,
    InformacionCursoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FontAwesomeModule,
    FormsModule
  ],
  exports: [
    HomePageProfessorComponent
  ]
})
export class HomeProfessorModule { }
