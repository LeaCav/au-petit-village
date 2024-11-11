import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router'; // Import du provider pour le routage
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // Import des routes
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideRouter(routes), 
  ]
})
.catch(err => console.error(err));