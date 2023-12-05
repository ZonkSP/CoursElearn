import { Component, ElementRef, Renderer2 } from '@angular/core';
import { } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGooglePlus, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { LoginService } from '../../services/login.service';
import { User } from 'src/app/interfaces/usuarios.interface';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent {
  fafacebook = faFacebook;
  fagoogle = faGooglePlus;
  falinkedin = faLinkedin;

  public dataUser: User = {
    name: "",
    email: "",
    password: "",
    role: 'student',
    profile: {
      photo: "string",
      bio: "string"
      // Otra información relevante del perfil
    }
  }

  public error : boolean = false;
  public messageLogin : string = '';
  public showModal: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2, private loginService: LoginService, 
    private userService: UsersService, private router : Router, private cdr : ChangeDetectorRef) {
    this.loginService.observableView.subscribe((state) => {
      this.showModal = state;
    });
    
  }

  ngAfterViewInit(): void {
    const signUpButton = this.el.nativeElement.querySelector('#signUp');
    const signInButton = this.el.nativeElement.querySelector('#signIn');
    const container = this.el.nativeElement.querySelector('#container');

    signUpButton.addEventListener('click', () => {
      this.renderer.addClass(container, 'right-panel-active');
    });

    signInButton.addEventListener('click', () => {
      this.renderer.removeClass(container, 'right-panel-active');
    });
  }

  public loginUser(user : User) : void {
    this.userService.loginUserFromApi(user).subscribe({
      next: (response: any) => {
        this.dataUser = {
          name: "",
          email: "",
          password: "",
          role: 'student',
          profile: {
            photo: "string",
            bio: "string"
            // Otra información relevante del perfil
          }
        };
        window.localStorage.setItem("token", response.token);
        this.messageLogin = "Acceso concedido";
        this.cdr.detectChanges(); // Forzar la actualización de la vista
        if (response.role == 'student') {
          this.router.navigateByUrl('/user-home');
        } else {
          this.router.navigateByUrl('/user-prof');
        }
        console.log(response);
      },
      error: (error: any) => {
        this.messageLogin = "Error en las credenciales";
        this.cdr.detectChanges(); // Forzar la actualización de la vista
        this.error = true;
        console.log(error);
      }
    })
  }

  public registerUser(user: User): void {
    this.userService.registerUserFromApi(user).subscribe(
      {
        next: (response: any) => {
          this.dataUser = {
            name: "",
            email: "",
            password: "",
            role: 'student',
            profile: {
              photo: "string",
              bio: "string"
              // Otra información relevante del perfil
            }
          };
          console.log(response);
        },
        error: (error: any) => {
          this.messageLogin = "Error en las credenciales";
          this.error = true;
          console.log(error);
        }
      }
    )
  }

}
