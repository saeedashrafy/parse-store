import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin/admin.component';
import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from './auth/auth.component';
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {ModelModule} from "../model/model.module";
import {MatProgressSpinnerModule, MatSpinner} from "@angular/material/progress-spinner";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {AuthGuard} from "./auth.guard";
import {ProductTableComponent} from './product-table/product-table.component';
import {MatTableModule} from "@angular/material/table";
import {ProductEditorComponent} from './product-editor/product-editor.component';
import {MatRadioModule} from "@angular/material/radio";
import {ProductRowComponent} from './product-row/product-row.component';
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonToggleModule} from "@angular/material/button-toggle";


const routing = RouterModule.forChild([
  {path: "auth", component: AuthComponent},
  {
    path: '', component: AdminComponent, canActivate: [AuthGuard],
    children: [
      {path: '', component: ProductTableComponent},
      {path: 'product/:mode/:id', component: ProductEditorComponent},
      {path: 'product/:mode', component: ProductEditorComponent}]
  },

  /* {path: "**", redirectTo: "auth"},*/

]);

@NgModule({
  declarations: [
    AdminComponent,
    AuthComponent,
    ProductTableComponent,
    ProductEditorComponent,
    ProductRowComponent,

  ],
  providers: [AuthGuard],
  imports: [
    CommonModule,
    ModelModule,
    MatRadioModule,
    routing,
    MatTableModule,
    MatCardModule,
    FlexLayoutModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatInputModule,
    MatButtonToggleModule,
  ]
})
export class AdminModule {
}
