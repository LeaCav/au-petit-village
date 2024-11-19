import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-obelix',
  standalone: true,
  imports: [],
  templateUrl: './product-obelix.component.html',
  styleUrl: './product-obelix.component.css'
})
export class ProductObelixComponent implements OnInit{

  imageUrl!: string;
  title!: string;

  ngOnInit(): void {
    this.imageUrl= '/img/obelix.jpg';
    this.title= "Figurine d'Obélix";
  }

}