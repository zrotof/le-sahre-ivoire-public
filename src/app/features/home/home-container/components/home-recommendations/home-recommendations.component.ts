import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Product } from 'src/app/shared/models/product';
import { ProductsService } from 'src/app/shared/services/products/products.service';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-recommendations',
  standalone: true,
  imports: [
    RouterLink,
    NgFor
  ],
  templateUrl: './home-recommendations.component.html',
  styleUrls: ['./home-recommendations.component.scss']
})

export class HomeRecommendationsComponent{
  @Input() products !: Product[] | null;
}
