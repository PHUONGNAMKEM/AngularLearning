import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail';
import { PageNotFound } from './shared/not-found/not-found';
import { ProductItemComponent } from './shared/product-item/productItem.component';
import { CreateComponent } from './create/create';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    // { path: 'product', component: ProductItemComponent },
    { path: 'detail/:id', component: DetailComponent },
    { path: 'create', component: CreateComponent },

    // {
    //     path: 'detail/:id',
    //     loadComponent: () =>
    //         import('./detail/detail').then((m) => m.DetailComponent)
    // },
    // {
    //     path: 'create',
    //     loadComponent: () =>
    //         import('./create/create').then((m) => m.CreateComponent)
    // },

    { path: '**', component: PageNotFound }
];
