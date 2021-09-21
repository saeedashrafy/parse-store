import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../store/home/home.component";
import {ProductDetailComponent} from "../store/product-detail/product-detail.component";
import {StoreComponent} from "../store/store/store.component";
import {CategoryProductsComponent} from "../store/cateogry-products/category-products.component";
import {LatestProductsComponent} from "../store/latest-products/latest-products.component";


const routes: Routes = [
  {path: '', redirectTo: '/store', pathMatch: 'full'},
  {
    path: 'store', component: StoreComponent,
    children: [
      {path: "", component: HomeComponent},
      {path: "product/:id", component: ProductDetailComponent},
      {path: "category/:category/products", component: CategoryProductsComponent},
    ],
    runGuardsAndResolvers: 'always',
  },
  {path: 'admin', loadChildren: () => import("../admin/admin.module").then(m => m.AdminModule)}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'}),],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
