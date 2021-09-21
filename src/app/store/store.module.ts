import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreComponent} from './store/store.component';
import {LatestProductsComponent} from "./latest-products/latest-products.component";
import {LatestProductComponent} from "./latest-products/latest-product/latest-product.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {HomeComponent} from "./home/home.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {DividerComponent} from "../divider/divider.component";
import {FooterComponent} from "./footer/footer.component";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {CategoryProductsComponent} from './cateogry-products/category-products.component';
import {ModelModule} from "../model/model.module";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    StoreComponent,
    HomeComponent,
    LatestProductsComponent,
    LatestProductComponent,
    ProductDetailComponent,
    DividerComponent,
    FooterComponent,
    CategoryProductsComponent,
  ],
  imports: [
    BrowserModule,
    ModelModule,
    RouterModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatTabsModule,
    MatButtonModule,
  ],
  exports: [StoreComponent, ProductDetailComponent, CategoryProductsComponent]
})
export class StoreModule {
}
