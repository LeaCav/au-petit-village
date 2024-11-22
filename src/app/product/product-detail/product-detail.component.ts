import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  private route = inject(ActivatedRoute);
  private productService = inject (ProductsService);

  data!: Product;
  
  ngOnInit(): void {
    const productName = this.route.snapshot.paramMap.get('name');

    if (productName) {
      const product = this.productService.getProductByName(productName);
      if (product) {
        this.data = product;
      } else {
        console.error('Produit introuvable :', productName)
      }
    }
  }
}
