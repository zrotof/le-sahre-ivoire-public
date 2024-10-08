import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(private http : HttpClient) { }

  getProducts(activeMenuLink: string): Observable<Product[]>{
    return this.http.get<Product[]>("https://api.restaurant.sm-digitalizer.fr/product/"+activeMenuLink);
  }

  getRecommandedPlats(): Observable<Product[]>{
    return this.http.get<Product[]>("https://api.restaurant.sm-digitalizer.fr/product/recommanded");
  }

}
