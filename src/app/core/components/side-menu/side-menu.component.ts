import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button'
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone : true,
  imports : [
    RouterLink,
    RouterLinkActive,
    SidebarModule,
    ButtonModule
  ]
})
export class SideMenuComponent implements OnInit {

  sideMenuDisplayed : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

   //Handling click on burger menu
   onBurgerMenu(){
    this.sideMenuDisplayed = !this.sideMenuDisplayed;
  }

  onmenuItemClicked(){
    this.sideMenuDisplayed = false;
  }

}
