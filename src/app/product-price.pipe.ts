import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product/product.model';

@Pipe({
  name: 'productPrice',
  standalone: true
})
export class ProductPricePipe implements PipeTransform {

  transform(products: Product[], sortDirection: 'asc' | 'desc'): Product[] {
    return [...products].sort((a, b) => 
      sortDirection === 'asc' ? a.price - b.price : b.price - a.price
    );
  }

}
