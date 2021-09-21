import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../../product.service";
import {Product} from "../../model/product";
import {ProductRepositoryService} from "../../model/product-repository.service";
import {CategoryType} from "../../model/category";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-latest-products',
  templateUrl: './latest-products.component.html',
  styleUrls: ['./latest-products.component.css']
})
export class LatestProductsComponent implements OnInit {
  latestProducts: Product[] = [];
  isLoading: boolean = false;
  @Input() categoryType: number = 0;
  @Input() hasLimit: boolean = false;
  categoryTitle: string = "";
  categoryLink: string = "";

  constructor(private productService: ProductService, private productRepo: ProductRepositoryService,) {

  }

  ngOnInit(): void {


    switch (this.categoryType) {
      case CategoryType.Women:
        this.categoryTitle = "آخرین محصولات زنانه";
        break;
      case CategoryType.Men:
        this.categoryTitle = "آخرین محصولات مردانه";
        break;
    }
    this.categoryLink = "category/"+ this.categoryType + "/products";
    this.getLatestProducts(this.categoryType, this.hasLimit);

  }

  getLatestProducts(categoryType: CategoryType, hasLimit: boolean): void {
    this.isLoading = true;
    this.productRepo.getLatestProducts( categoryType, res => {
      this.latestProducts = res;
      this.isLoading = false;
    },hasLimit);
  }
}

