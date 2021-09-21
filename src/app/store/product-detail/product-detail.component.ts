import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductRepositoryService} from "../../model/product-repository.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product?: Product;
  isLoading: boolean = false;

  constructor(private rout: ActivatedRoute, private productRepo: ProductRepositoryService, private router: Router) {
  }

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails(): void {

    const productId = this.rout.snapshot.paramMap.get('id');
    if (productId !== null) {
      this.isLoading = true;
      this.productRepo.getProduct(productId, res => {
        this.product = res;
        this.isLoading = false;
      });
    } else
      this.router.navigateByUrl("/");
  }

}
