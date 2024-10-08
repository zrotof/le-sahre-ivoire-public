import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { withEnabledBlockingInitialNavigation, provideRouter, Routes } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
    {
        path: "",
        title : "Le Sahré Ivoire",
        loadComponent: () => import("./app/features/home/home-container/home-container.component").then(module => module.HomeContainerComponent)
    },
    {
        path: "contact",
        title : "Contactez-nous",
        data : {
            backgrounded : true
        },
        loadComponent: () => import("./app/features/contact/contact-container/contact-container.component").then(module => module.ContactContainerComponent)
    },
    {
        path: "notre-carte",
        title : "Consultez notre carte",
        data : {
            backgrounded : true
        },
        loadComponent: () => import("./app/features/menu/menu-container/menu-container.component").then(module => module.MenuContainerComponent)
    },
    {
        path: "a-propos",
        title : "À propos du restaurant",
        data : {
            backgrounded : true
        },
        loadComponent: () => import("./app/features/restaurant/restaurant-container/restaurant-container.component").then(module => module.RestaurantContainerComponent)
    }
];


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule.withServerTransition({ appId: 'serverApp' }), FontAwesomeModule, HttpClientModule),
        provideAnimations(),
        provideRouter(routes, withEnabledBlockingInitialNavigation())
    ]
})
  .catch(err => console.error(err));
