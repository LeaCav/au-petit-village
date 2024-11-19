import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  imageUrl!: string;
  title!: string;


ngOnInit(): void {
  this.imageUrl = '/au-petit-village/public/img/brothers.jpg';
    this.title = 'Pierrick et Anthony';
  }
}
