import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';



@NgModule({
  declarations: [
    ModalDialogComponent,
  ],
  exports: [
    ModalDialogComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class GlobalModuleModule { }
