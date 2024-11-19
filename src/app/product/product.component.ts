import { Component, inject } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


import { ProductFilterPipe } from '../product-filter.pipe';
import { ProductPricePipe } from '../product-price.pipe';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';



interface Product {
  name: string;
  price: number;
  image: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, 
            MatCardModule,
            MatInputModule,
            MatIconModule,
            MatButtonModule,
            FormsModule,
            RouterModule,
            ProductFilterPipe,
            ProductPricePipe,
          ],
          
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent{

  dialog= inject(MatDialog);

  products: Product[] = [
    {name: 'Astérix', price: 55, image: '/img/asterix.jpg', description: '', link: '/Asterix'},
    {name: 'Obélix', price: 50, image: '/img/obelix.jpg', description: '', link: '/Obelix'},
    {name: 'Panoramix', price: 45, image: '/img/panoramix.jpg', description: '', link: '/Panoramix'},
  ];

  searchQuery: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  toggleSortDirection() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  }

  openDialog(product: Product) {
    this.dialog.open(ProductDialogComponent, {
      data: product,
    });
  }
}