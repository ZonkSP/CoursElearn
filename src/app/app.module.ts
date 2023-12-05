import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginModule } from './login/login.module';
import { ContentModule } from './content/content.module';
import { HomeUserModule } from './home-user/home-user.module';
import { GlobalModuleModule } from './global-module/global-module.module';
import { HttpClientModule} from '@angular/common/http';
import { DialogComponent } from './Components/dialog/dialog.component';

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
    GlobalModuleModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
