import { Component, Input, ViewEncapsulation } from '@angular/core';
import { TestimonyComponent } from './testimony/testimony.component';
import { NgFor } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-testimonies',
  standalone: true,
  imports: [
    FontAwesomeModule,
    NgFor,
    TestimonyComponent
  ],
  templateUrl: './home-testimonies.component.html',
  styleUrls: ['./home-testimonies.component.scss'],
  encapsulation : ViewEncapsulation.None
})

export class HomeTestimoniesComponent {
  @Input() testimonies !: any;

  faQuoteRight = faQuoteRight;
}
