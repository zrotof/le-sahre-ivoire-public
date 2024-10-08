import { Component, ElementRef, HostListener, Inject, Input, OnInit, PLATFORM_ID, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { SideCartComponent } from '../side-cart/side-cart.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { AddOrderService } from 'src/app/shared/services/add-order/add-order.service';
import { NgStyle, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone : true,
  imports : [
    NgStyle,
    RouterLink,
    RouterLinkActive,
    SideCartComponent,
    SideMenuComponent
  ]
})
export class HeaderComponent implements OnInit {

  @ViewChild('header') header !: ElementRef<HTMLElement>;
  @Input() message !: string | null;

  displayMenu: boolean = false;

  backgroundedHeader !: boolean;
  onLive  = true;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private addOrderService : AddOrderService,
    private _renderer : Renderer2,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.onRoutingEvent();
    this.initOrderOnLocalStorage();
  }

  //On routing event we, if we are on small screen, we toggle the menu to disapear from the screen after we click on a link
  onRoutingEvent() : void{
    this.router.events.subscribe({
      next : (event) => {
        if(event instanceof ActivationEnd){
          if(event.snapshot.component){
            this.backgroundedHeader = event.snapshot.data['backgrounded']

            if(this.backgroundedHeader){
              this._renderer.addClass(this.header.nativeElement, 'navbar-background-on-scroll');
            }else{
              this._renderer.removeClass(this.header.nativeElement, 'navbar-background-on-scroll');
            }
          }
        }
      }
    })
  }

  initOrderOnLocalStorage(){
    this.addOrderService.initOrderLocalStorage();
  }

  menuForSmallScreenHandler(value: boolean) {
    this.displayMenu = false;
  }

  @HostListener('window:scroll')
  onWindowScroll(){

    if(this.backgroundedHeader){
      this._renderer.addClass(this.header.nativeElement, 'navbar-background-on-scroll');
    }
    else{
      if(isPlatformBrowser(this.platformId)){
        if (window.pageYOffset > this.header.nativeElement?.clientHeight) {
          this._renderer.addClass(this.header.nativeElement, 'navbar-background-on-scroll');
        }
        else {
          this._renderer.removeClass(this.header.nativeElement, 'navbar-background-on-scroll');
        }
      }
    }
  }
  
}
