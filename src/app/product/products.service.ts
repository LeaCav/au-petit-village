import { Injectable } from '@angular/core';

interface Product {
  name: string;
  price: number;
  image: string;
  smallDesc: string;
  description: string;
  size: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: Product[] = [
    {name: 'Astérix',
      price: 50,
      image: '/img/asterix.jpg',
      smallDesc: 'Figurine unique d\'\Astérix',
      description: 'Figurine réalisée à la main en résine et peinte à acrylique. Chaque figurine est pourvue d\'\ un numéro de série unique.',
      size: 20},
    {name: 'Obélix',
      price: 55,
      image: '/img/obelix.jpg',
      smallDesc: 'Figurine unique d\'\Obélix',
      description: 'Figurine réalisée à la main en résine et peinte à acrylique. Chaque figurine est pourvue d\'\ un numéro de série unique.',
      size: 20},
    {name: 'Panoramix',
      price: 45,
      image: '/img/panoramix.jpg',
      smallDesc: 'Figurine unique de Panoramix',
      description: 'Figurine réalisée à la main en résine et peinte à acrylique. Chaque figurine est pourvue d\'\ un numéro de série unique.',
      size: 15}
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductByName(name: string): Product | undefined {
    return this.products.find(product => product.name === name);
  }
}