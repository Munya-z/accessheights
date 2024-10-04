import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [{
    path: '', component: HomeComponent
},{
    path: 'catalog', component: CatalogComponent,
     children: [
      {
        path: 'products', // child route path
        component: ProductsComponent , // child route component that the router renders
      },
      {
        path: 'services',
          component: ServicesComponent , // another child route component that the router renders
      },
    ],
},{
    path: 'about-us', component: AboutUsComponent
},{
    path: 'contact-us', component: ContactUsComponent
},];
