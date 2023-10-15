import { Component } from '@angular/core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Proyecto_Web';
  backimage = '../assets/BG-min.jpg'
  faheart = faHeart;
}
