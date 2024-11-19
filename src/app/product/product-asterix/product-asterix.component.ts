import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-asterix',
  standalone: true,
  imports: [],
  templateUrl: './product-asterix.component.html',
  styleUrl: './product-asterix.component.css'
})
export class ProductAsterixComponent implements OnInit{

  imageUrl!: string;
  title!: string;

  ngOnInit(): void {
    this.imageUrl= '/img/asterix.jpg';
    this.title= "Figurine d'Astérix";
  }

}
