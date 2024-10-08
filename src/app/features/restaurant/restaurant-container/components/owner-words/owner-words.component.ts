import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faQuoteRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-owner-words',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './owner-words.component.html',
  styleUrls: ['./owner-words.component.scss']
})
export class OwnerWordsComponent {

  faQuoteRight = faQuoteRight;
  faQuoteLeft = faQuoteLeft;
}
