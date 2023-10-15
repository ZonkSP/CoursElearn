import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalLoginComponent } from './Components/modal-login/modal-login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ModalLoginComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    ModalLoginComponent,
  ]
})
export class LoginModule { }
