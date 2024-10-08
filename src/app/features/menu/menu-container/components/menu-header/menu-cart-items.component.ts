import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { RestaurantCartItem } from 'src/app/shared/models/restaurant-cart-item';

@Component({
  selector: 'app-menu-cart-items',
  standalone: true,
  imports: [
    NgClass,
    NgFor
  ],
  templateUrl: './menu-cart-items.component.html',
  styleUrls: ['./menu-cart-items.component.scss']
})
export class MenuCartItemsComponent implements OnChanges {

  @Input() cartItems !: RestaurantCartItem[];
  @Output() cartItemMenu= new EventEmitter<number>();

  setActiveMenu( cartItem : RestaurantCartItem){
    this.cartItems.map((menu : RestaurantCartItem ) => menu.isActive = false);
    cartItem.isActive = true;
  }

  onCartItemClicked(cartItem : RestaurantCartItem){
    this.setActiveMenu(cartItem);
    this.cartItemMenu.next(cartItem.id as number);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['cartItems'].currentValue) { //&& this.isFirstChange){
        this.onCartItemClicked(this.cartItems[0]);
        //this.isFirstChange = false;
    }
  }
}
