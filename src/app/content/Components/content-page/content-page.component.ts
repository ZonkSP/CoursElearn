import { Component } from '@angular/core';
import { LoginService } from 'src/app/login/services/login.service';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent {

  public activeModal : boolean = false;

  constructor(private loginService : LoginService){
    this.loginService.observableView.subscribe((state) => {
      this.activeModal = state;
    })
  }
}
