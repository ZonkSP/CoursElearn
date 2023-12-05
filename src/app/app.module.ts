import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginModule } from './login/login.module';
import { ContentModule } from './content/content.module';
import { HomeUserModule } from './home-user/home-user.module';
import { HttpClientModule} from '@angular/common/http';
import { DialogComponent } from './Components/dialog/dialog.component';
import { HomeProfessorModule } from './home-professor/home-professor.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    LoginModule,
    ContentModule,
    HomeUserModule,
    HttpClientModule,
    HomeProfessorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
