import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalLoginComponent } from './Components/modal-login/modal-login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ModalLoginComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule
  ],
  exports: [
    ModalLoginComponent,
  ]
})
export class LoginModule { }
