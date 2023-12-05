import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { GlobalModuleModule } from '../global-module/global-module.module';
import { FormsModule } from '@angular/forms';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { SignInCursoComponent } from './components/sign-in-curso/sign-in-curso.component';

@NgModule({

  declarations: [
    HomePageComponent,
    ListaCursosComponent,
    ListaTareasComponent,
    InformacionComponent,
    SignInCursoComponent
  ],
  exports: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FontAwesomeModule,
    GlobalModuleModule,
    FormsModule
  ]
})
export class HomeUserModule { }
