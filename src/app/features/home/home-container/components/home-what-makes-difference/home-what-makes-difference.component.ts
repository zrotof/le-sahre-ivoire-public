import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-what-makes-difference',
  templateUrl: './home-what-makes-difference.component.html',
  styleUrls: ['./home-what-makes-difference.component.scss'],
  standalone : true,
  imports : [
    NgFor
  ]
})
export class HomeWhatMakesDifferenceComponent implements OnInit {

  reasons!: any[];

  constructor() { }

  ngOnInit(): void {
    this.initReason();
  }

  initReason(){
    this.reasons = [
      {
        image: "../../../../../../assets/img/hero/what-makes-difference/confetti.png",
        title: "Accueil Chaleureux",
      },
      {
        image: "../../../../../../assets/img/hero/what-makes-difference/vegetable.png",
        title: "Ingredients Frais",
      },
      {
        image: "../../../../../../assets/img/hero/what-makes-difference/local-business.png",
        title: "Produit Locaux",
      },
      {
        image: "../../../../../../assets/img/hero/what-makes-difference/smiley.png",
        title: "Satisfaction Client",
      }
    ]
  }

}
