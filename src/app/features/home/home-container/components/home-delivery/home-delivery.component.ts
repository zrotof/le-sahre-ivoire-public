import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-delivery',
  templateUrl: './home-delivery.component.html',
  styleUrls: ['./home-delivery.component.scss'],
  standalone: true,
  imports: [
    NgFor
  ]
})
export class HomeDeliveryComponent implements OnInit {

  foodApps!: any[];

  constructor() { }

  ngOnInit(): void {
    this.initFoodApps();
  }

  initFoodApps(){
    this.foodApps = [
      {
        image: "../../../../assets/img/food-apps/uber-eat.png",
        alt: "uber eat",
        link: "https://www.ubereats.com/fr",
        name: "Uber Eat"
      },
      {
        image: "../../../assets/img/food-apps/just-eat.png",
        alt: "just eat logo",
        link: "https://www.just-eat.fr/",
        name: "Just Eat"
      },
      {
        image: "../../../assets/img/food-apps/deliveroo.gif",
        alt: "deliveroo logo",
        link: "https://deliveroo.fr/fr/",
        name: "Deliveroo"
      }
    ]
  }

}
