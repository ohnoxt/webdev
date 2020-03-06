import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {CategoriesComponent} from './categories/categories.component';
import {ProductListComponent} from './product-list/product-list.component';
import {CartComponent} from './cart/cart.component';
import {ProductDetailsComponent} from './product-details/product-details.component';

const routes: Route[] = [
  {path: 'categories', component: CategoriesComponent},
  {path: '', redirectTo: '/categories', pathMatch: 'full'},
  {path: 'categories/:categoryId/products', component: ProductListComponent},
  {path: 'cart', component: CartComponent},
  {path: 'products/:productId', component: ProductDetailsComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
