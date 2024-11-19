import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Product {
  name: string;
  price: number;
  image: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-product-dialog',
  standalone: true,
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css'],
  imports: [MatDialogContent,
            MatDialogActions,
            CommonModule,
            MatDialogClose,
            RouterModule,
  ]
})
export class ProductDialogComponent {
  data = inject(MAT_DIALOG_DATA) as Product; 
}