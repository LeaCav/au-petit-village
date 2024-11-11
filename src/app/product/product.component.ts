import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProductFilterPipe } from '../product-filter.pipe';
import { ProductPricePipe } from '../product-price.pipe';
import { RouterModule } from '@angular/router';


interface Product {
  name: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatInputModule, MatIconModule, MatButtonModule, FormsModule, RouterModule, ProductFilterPipe, 
    ProductPricePipe,],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent{
  products: Product[] = [
    {name: 'Astérix', price: 55, image: '../public/img/asterix.jpg'},
    {name: 'Obélix', price: 50, image: '../public/img/obelix.jpg'},
    {name: 'Panoramix', price: 45, image: '../public/img/panoramix.jpg'},
  ];

  searchQuery: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  toggleSortDirection() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  }

}