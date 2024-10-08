import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { OwnerWordsComponent } from './components/owner-words/owner-words.component';
import { OurRewardsComponent } from './components/our-rewards/our-rewards.component';

@Component({
  selector: 'app-restaurant-container',
  standalone: true,
  imports: [
    HeroComponent,
    OurRewardsComponent,
    OwnerWordsComponent
  ],
  templateUrl: './restaurant-container.component.html',
  styleUrls: ['./restaurant-container.component.scss']
})
export class RestaurantContainerComponent {

}
