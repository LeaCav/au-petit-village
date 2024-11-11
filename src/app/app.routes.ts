import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path: '', component: Component},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
];
