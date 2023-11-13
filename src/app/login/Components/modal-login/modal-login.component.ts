import { Component, ElementRef, Renderer2 } from '@angular/core';
import { } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import {faFacebook, faGooglePlus, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent {
  fafacebook = faFacebook;
  fagoogle = faGooglePlus;
  falinkedin = faLinkedin;

  public showModal : boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2, private loginService : LoginService) {
    this.loginService.observableView.subscribe((state) => {
      this.showModal = state;
    })
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

}
