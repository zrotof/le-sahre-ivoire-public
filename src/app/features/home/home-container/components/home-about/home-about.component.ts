import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlay, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.scss'],
  standalone : true,
  imports : [
    FontAwesomeModule
  ]
})
export class HomeAboutComponent {
  faPlay = faPlay;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faLocationDot = faLocationDot
}
