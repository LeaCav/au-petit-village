import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatInputModule,
            MatFormFieldModule,
            FormsModule,
            ReactiveFormsModule,
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  imageUrl!: string;
  title!: string;

  ngOnInit(): void {
    this.imageUrl = '/img/menhir.jpg';
    this.title = 'Menhir';
  }

}
