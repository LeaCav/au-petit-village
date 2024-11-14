import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions } from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

interface Product {
  name: string;
  price: number;
  image: string;
  description: string;
}

@Component({
  selector: 'app-product-dialog',
  standalone: true,
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css'],
  imports: [MatDialogContent,
            MatDialogActions,
            CommonModule
  ]
})
export class ProductDialogComponent {
  data = inject(MAT_DIALOG_DATA) as Product;
}