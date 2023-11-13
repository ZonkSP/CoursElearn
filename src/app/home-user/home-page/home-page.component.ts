import { Component } from '@angular/core';
import { ICONOS, ICONOS_REGULAR } from 'src/assets/icons';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  icon = ICONOS;
  icon_regular = ICONOS_REGULAR;

}
