import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-panoramix',
  standalone: true,
  imports: [],
  templateUrl: './product-panoramix.component.html',
  styleUrl: './product-panoramix.component.css'
})
export class ProductPanoramixComponent implements OnInit{

  imageUrl!: string;
  title!: string;

  ngOnInit(): void {
    this.imageUrl= '/img/panoramix.jpg';
    this.title= "Figurine de Panoramix";
  }

}
