import { Component, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatMenuModule,
            MatMenuTrigger,
            MatButtonModule,
            CommonModule,
            RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  imageUrlLogo!: string;
  titleLogo!: string;
  imageUrlIdefix!: string;
  titleIdefix!: string;
  
  ngOnInit(): void {
    this.imageUrlLogo = '/img/Logo.jpg';
    this.titleLogo = 'Accueil';
    this.imageUrlIdefix= '/img/idefix.png'
    this.titleIdefix= 'en avant!'
  } 
}
