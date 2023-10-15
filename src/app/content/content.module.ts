import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentPageComponent } from './Components/content-page/content-page.component';
import { LoginModule } from '../login/login.module';

@NgModule({
  declarations: [
    ContentPageComponent
  ],
  imports: [
    CommonModule,
    LoginModule
  ],
  exports: [
    ContentPageComponent
  ]
})
export class ContentModule { }
