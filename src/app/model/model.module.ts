import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "./auth.service";
import {ProductRepositoryService} from "./product-repository.service";
import {CategoryRepositoryService} from "./category-repository.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[AuthService,ProductRepositoryService,CategoryRepositoryService]
})
export class ModelModule { }
