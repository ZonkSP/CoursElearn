import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/usuarios.interface';
import { UsersService } from 'src/app/services/users.service';
import { ICONOS, ICONOS_REGULAR } from 'src/assets/icons';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  icon = ICONOS;
  icon_regular = ICONOS_REGULAR;

  public typeInformation : number = 0;
  
  constructor(private userService : UsersService){
    this.getInfoUser();
  }

  public get informationProffesor() : User{
    return this.userService.infoUser;
  }

  private getInfoUser() : void {
    this.userService.getInfoUser().subscribe(
      {
        next: (response: any) => {
          console.log(response);
          this.userService.infoUser = response.userInfo;
        },
        error: (error: any) => {
          console.log(error);

        }
      }
    )
  }

  
}
