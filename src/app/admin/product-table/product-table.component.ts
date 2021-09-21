import {Component, OnInit} from '@angular/core';
import {ProductRepositoryService} from "../../model/product-repository.service";
// @ts-ignore
import {Parse} from "parse";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {
  allProducts: Product[] = [];
  isLoading: boolean = false;

  constructor(private productRepo: ProductRepositoryService) {
  }

  ngOnInit(): void {
    this.getAllProduct();
  }

  onDeleteProduct(eventData: { productId: string }) {
    this.isLoading = true;
    this.productRepo.deleteProduct(eventData.productId, isSuccessful => {
      this.getAllProduct();
    });
  }

  getAllProduct() {
    this.isLoading = true;
    this.productRepo.getAllProducts(res => {
      this.isLoading = false;
      this.allProducts = res;
    })
  }

}


