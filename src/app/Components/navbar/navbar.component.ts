import { Component } from '@angular/core';
import {} from '@fortawesome/free-brands-svg-icons';
import {} from '@fortawesome/free-regular-svg-icons';
import * as icons from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/login/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  // !-->>>> variables
  icon = icons;
  // <----------!

  constructor(private loginService : LoginService){}

  public changeViewModal() : void {
    this.loginService.setShowModal = !this.loginService.getShowModal;
  }

  public verifyLogin : boolean = false;
  
  public checkLogin() : void 
  {
    this.verifyLogin = !this.verifyLogin;
  }
}
