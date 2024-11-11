import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';


@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule,ProductComponent,],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {

}
