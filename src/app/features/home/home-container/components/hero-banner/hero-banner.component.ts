import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss']
})
export class HeroBannerComponent {

  faAnglesDown = faAnglesDown;

  constructor(
    private scroller : ViewportScroller
  ){}

  onAnglesDownClicked(){
    this.scroller.scrollToAnchor("home-about-anchor")
  }
}
