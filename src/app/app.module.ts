import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../header/header.component';
import { TopMenuComponent } from '../header/top-menu/top-menu.component';
import { MainMenuComponent } from '../header/main-menu/main-menu.component';
import { AlertMenuComponent } from '../header/alert-menu/alert-menu.component';
import { SearchComponent } from './container/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ContainerComponent } from './container/container.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';
import { FeaturedProductsComponent } from './container/featured-products/featured-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    AlertMenuComponent,
    SearchComponent,
    ProductListComponent,
    ContainerComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailComponent,
    FeaturedProductsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
