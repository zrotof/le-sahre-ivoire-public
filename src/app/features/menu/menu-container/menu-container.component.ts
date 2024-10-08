import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, of } from 'rxjs';
import { MiniHero } from 'src/app/shared/models/mini-hero';
import { Product } from 'src/app/shared/models/product';
import { ProductsService } from 'src/app/shared/services/products/products.service';
import { ProductDetailsComponent } from 'src/app/shared/components/product-details/product-details.component';
import { RestaurantCartItem } from 'src/app/shared/models/restaurant-cart-item';
import { MenuCartItemsComponent } from './components/menu-header/menu-cart-items.component';
import { MiniHeroComponent } from 'src/app/shared/components/mini-hero/mini-hero.component';

@Component({
  selector: 'app-menu-container',
  standalone: true,
  imports: [
    AsyncPipe,
    NgFor,
    MiniHeroComponent,
    MenuCartItemsComponent,
    ProductDetailsComponent,
  ],
  templateUrl: './menu-container.component.html',
  styleUrls: ['./menu-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuContainerComponent implements OnInit{

  productList$ !: Observable<Product[]>;
  restaurantCartItems$ !: Observable<RestaurantCartItem[]> ;
  routeSubscription!: Subscription;

  miniHero$ !: Observable<MiniHero>;
  
  constructor(
    private productService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
      this.initMiniHero();
      this.initMenus();
  
      this.activatedRoute.queryParams.subscribe(
        param =>{
          /*
          if(!param.menu){
            this.setQueryParamsOnMenusItemsNavigation('viandes');
            this.setActiveMenu(0);
            this.getFoodsOrDrinks('viandes');
          }else{
            const index = this.menus.findIndex((menu: { link: string; }) => menu.link === param.menu);
            if(index == -1){
              this.setQueryParamsOnMenusItemsNavigation('viandes');
              this.setActiveMenu(0);
              this.getFoodsOrDrinks('viandes');
            }
            else{
              this.setQueryParamsOnMenusItemsNavigation(param.menu);
              this.setActiveMenu(index);
              this.getFoodsOrDrinks(param.menu);
            }
          }
          */
        }
      )
    }

    initMiniHero(){
      this.miniHero$ = of(
        {
        title: "Notre Carte",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        image: "../../../assets/img/contact/header-bg.jpeg"
        }
      )
    }

    initMenus(){
      this.restaurantCartItems$ =  of([
        {
          label: "Viandes",
          itemType: 1,
          stock: 4
        },
        {
          label: "Poissons",
          itemType: 2,
          stock: 2
        },
        {
          label: "Salades",
          itemType: 3,
          stock: 4
  
        },
        {
          label: "Accompagnements",
          itemType: 4,
          stock: 3
        },
        {
          label: "Petits dej",
          itemType: 5,
          stock: 3
        },
        {
          label: "Boissons",
          itemType: 6,
          stock: 2
        },
        {
          label: "Desserts",
          itemType: 7,
          stock: 4
        }
    
      ])
    }

    getFoodsOrDrinks(id: number){
      console.log(id)
      this.productList$ = this.productService.getProducts("Viandes")
    }
}
