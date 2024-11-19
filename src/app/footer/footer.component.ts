import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  facebookUrl!: string;
  facebookImageUrl!: string;
  facebookTitle!: string;
  instagramUrl!: string;
  instagramImageUrl!: string;
  instagramTitle!: string;

  ngOnInit(): void {
    this.facebookUrl = 'https://www.facebook.com/';
    this.facebookImageUrl = '/img/facebook.png';
    this.facebookTitle = 'Facebook';
    this.instagramUrl = 'https://www.instagram.com/';
    this.instagramImageUrl = '/img/instagram.png';
    this.instagramTitle = 'Instagram';
  }

}
