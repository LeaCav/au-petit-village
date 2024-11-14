import { Component, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatMenuModule,
            MatButtonModule,
            CommonModule,
            RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  imageUrl!: string;
  title!: string;
  
  ngOnInit(): void {
    this.imageUrl = '/au-petit-village/public/img/Logo.jpg';
    this.title = 'Logo'; 
  }
}
