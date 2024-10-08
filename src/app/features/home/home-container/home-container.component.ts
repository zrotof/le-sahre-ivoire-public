import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { HomeWhatMakesDifferenceComponent } from './components/home-what-makes-difference/home-what-makes-difference.component';
import { HomeRecommendationsComponent } from './components/home-recommendations/home-recommendations.component';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/shared/models/product';
import { ProductsService } from 'src/app/shared/services/products/products.service';
import { HomeAboutComponent } from './components/home-about/home-about.component';
import { HomeTestimoniesComponent } from './components/home-testimonies/home-testimonies.component';
import { HomeDeliveryComponent } from './components/home-delivery/home-delivery.component';

@Component({
  selector: 'app-home-container',
  standalone: true,
  imports: [
    CommonModule,
    HeroBannerComponent,
    HomeWhatMakesDifferenceComponent,
    HomeRecommendationsComponent,
    HomeAboutComponent,
    HomeTestimoniesComponent,
    HomeDeliveryComponent
  ],
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {

  recommended$ !: Observable<Product[] | null>;
  testimonies$ !: Observable<any | null>;

  constructor( private productService : ProductsService) { }

  ngOnInit(): void {
    this.getRecommenedFood();
    this.getTestimonies();
  }

  getRecommenedFood(){
    this.recommended$ = this.productService.getRecommandedPlats()
  }

  getTestimonies(){
    const testimonies = [
      {
        image : "../../../../../../assets/img/home/testimonies/testify.webp",
        name : "Marc Antoine",
        message : "Une expérience exceptionnelle ! La nourriture était délicieuse, et le service était impeccable. J'ai adoré la variété des plats africains authentiques. 'Le Sahré Ivoire' est un incontournable pour les amoureux de la cuisine africaine."
      },
      {
        image : "../../../../../../assets/img/icons/google.png",
        name : "Sophie L",
        message : "Un voyage culinaire incroyable ! Les saveurs étaient incroyables, et chaque plat était une découverte. Le personnel était chaleureux et attentif. Je recommande vivement 'Le Sahré Ivoire' pour une expérience unique."
      },
      {
        image : "../../../../../../assets/img/icons/google.png",
        name : "Amira M",
        message : "Ce restaurant est une véritable pépite ! Les plats étaient non seulement délicieux mais aussi artistiquement présentés. La musique et l'ambiance africaine ont créé une atmosphère mémorable. J'y retournerai certainement."
      },
      {
        image : "../../../../../../assets/img/icons/google.png",
        name : "Marc B",
        message : "Un véritable trésor gastronomique ! J'ai goûté des plats que je n'aurais jamais imaginé trouver ici. L'authenticité et la fraîcheur des ingrédients sont impressionnantes. 'Le Sahré Ivoire' est maintenant mon restaurant préféré."
      },
      {
        image : "../../../../../../assets/img/icons/google.png",
        name : "Nadia S",
        message : "Un régal pour les sens ! J'ai adoré chaque plat que j'ai essayé. Les portions étaient généreuses, et le mélange de saveurs était parfait. Je recommande vivement 'Le Sahré Ivoire' à tous les amateurs de cuisine africaine."
      },
      {
        image : "../../../../../../assets/img/icons/google.png",
        name : "Éric D",
        message : "C'était une expérience inoubliable. La nourriture était à la fois savoureuse et saine. Le service était attentionné, et l'ambiance était festive. J'ai déjà hâte d'y retourner pour explorer davantage le menu."
      },
      {
        image : "../../../../../../assets/img/icons/google.png",
        name : "Sarah H",
        message : "Un voyage gastronomique fascinant ! 'Le Sahré Ivoire' a su capturer l'essence de l'Afrique à travers ses plats. J'ai été impressionnée par la qualité et la diversité des choix. C'est un endroit où je me rendrai régulièrement."
      }
    ]
    this.testimonies$ = of(testimonies)
  }
}
