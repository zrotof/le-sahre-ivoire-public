import { Component, Input, OnInit } from '@angular/core';
import { MiniHero } from '../../models/mini-hero';

@Component({
  selector: 'app-mini-hero',
  templateUrl: './mini-hero.component.html',
  styleUrls: ['./mini-hero.component.scss'],
  standalone:true
})
export class MiniHeroComponent{
  @Input() miniHero !: MiniHero ;
}

