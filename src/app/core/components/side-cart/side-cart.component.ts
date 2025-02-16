import { DecimalPipe, NgIf, NumberFormatStyle, NumberSymbol } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
//import { Order, OrderItem } from 'src/app/models/order';
//import { AddOrderService } from 'src/app/services/add-order/add-order.service';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-side-cart',
  templateUrl: './side-cart.component.html',
  styleUrls: ['./side-cart.component.scss'],
  encapsulation : ViewEncapsulation.None,
  standalone : true,
  imports : [
    NgIf,
    SidebarModule,
    DecimalPipe
  ]

})
export class SideCartComponent implements OnInit {

  siderbarDisplayed = false;

  numberOfItems : number = 3;
  //orderedProductList : Order | undefined;
  totalPrice: number = 0;
  isCartEmpty : boolean = true;

  constructor(
 //   private addOrderService: AddOrderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getOrderedItems();
    this.getTotalNumberOfItemsAndTotalPrice();
  }

  displaySidebar(){
    this.siderbarDisplayed = !this.siderbarDisplayed;
    this.getOrderedItems();
  }

  openCartPage(){
    this.displaySidebar();
    this.router.navigateByUrl("/panier");
  }

  openMenuPage(){
    this.displaySidebar();
    this.router.navigateByUrl("/notre-carte");
  }

  getTotalNumberOfItemsAndTotalPrice(){
/*    this.addOrderService.order$.subscribe(order =>{
      
      this.numberOfItems = 0;
      this.totalPrice = 0;
      
      if(order?.items.length){

        for(const item of order.items){

          this.numberOfItems += item.quantity; 

          this.totalPrice += item.quantity * item.price;
        }
      }
    })
  */
  }

  getOrderedItems(){
/*    this.addOrderService.order$
      .subscribe(order => {

        this.orderedProductList = order;
        if(this.orderedProductList.items.length == 0){
          this.isCartEmpty = true;
        }
        else{
          this.isCartEmpty = false
        }
      })
*/
  }

}
