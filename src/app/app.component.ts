import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AnnouncementComponent } from './core/components/announcement/announcement.component';
import { HeaderComponent } from './core/components/header/header.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { FooterComponent } from './core/components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone : true,
  imports : [
    NgIf,
    RouterOutlet,
    AsyncPipe,
    AnnouncementComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class AppComponent {
  title = 'Le Sahré Ivoire';

  announce$ : Observable<string> = of("Le Sahré Ivoire vous souhaite d'excellentes fêtes de fin d'année ! ")

}
