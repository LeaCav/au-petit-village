import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductAsterixComponent } from './product/product-asterix/product-asterix.component';
import { ProductObelixComponent } from './product/product-obelix/product-obelix.component';
import { ProductPanoramixComponent } from './product/product-panoramix/product-panoramix.component';

export const routes: Routes = [
    {path: '', component: AccueilComponent, pathMatch: 'full'},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'Asterix', component: ProductAsterixComponent},
    {path: 'Obelix', component: ProductObelixComponent},
    {path: 'Panoramix', component: ProductPanoramixComponent}
];
