import { Component } from '@angular/core';
import {} from '@fortawesome/free-brands-svg-icons';
import {} from '@fortawesome/free-regular-svg-icons';
import {faBars, faMicrochip, faHouse, faUser, faEnvelope, faBell, faGlobe} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  // !-->>>>icon variable
  faBars = faBars;
  faChip = faMicrochip;
  faHouse = faHouse;
  faUser = faUser;
  faEnvelope = faEnvelope;
  faBell = faBell;
  faGlobe = faGlobe;
  // <----------!
  public verifyLogin : boolean = false;
  
  public checkLogin() : void 
  {
    this.verifyLogin = !this.verifyLogin;
  }
}
