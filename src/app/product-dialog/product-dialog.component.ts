import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductsService } from '../product/products.service';

@Component({
  selector: 'app-product-dialog',
  standalone: true,
  imports: [MatDialogContent,
    MatDialogActions,
    CommonModule,
    MatDialogClose,
    RouterModule,
],
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css']

})
export class ProductDialogComponent {
  data = inject(MAT_DIALOG_DATA);
  productService = inject(ProductsService) 
}