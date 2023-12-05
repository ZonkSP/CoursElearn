import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { GlobalModuleModule } from '../global-module/global-module.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
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
export class HomeProfessorModule { }
