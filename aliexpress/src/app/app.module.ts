import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductListComponent} from './product-list/product-list.component';
import {SuperHeaderComponent} from './super-header/super-header.component';
import {HttpClientModule} from '@angular/common/http';
import {ShareButtonsModule} from '@ngx-share/buttons';
import {FormsModule} from '@angular/forms';
import {CategoriesComponent} from './categories/categories.component';
import {Route, RouterModule} from '@angular/router';
import {CartComponent} from './cart/cart.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    SuperHeaderComponent,
    CategoriesComponent,
    CartComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ShareButtonsModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
