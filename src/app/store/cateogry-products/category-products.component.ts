import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ActivatedRoute, NavigationEnd, Router, RouterEvent} from "@angular/router";
import {CategoryType} from "../../model/category";
import {ProductRepositoryService} from "../../model/product-repository.service";
import {Subject, Subscription} from "rxjs";
import {filter, takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-mens-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit, OnDestroy {
  latestProducts: Product[] = [];
  isLoading: boolean = false;
  categoryType: number = 0;
  categoryTitle: string = "";
  navigationSubscription = new Subscription();

  constructor(private activeRoute: ActivatedRoute, private router: Router, private productRepo: ProductRepositoryService) {
  }

  ngOnInit(): void {
    this.getData();
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        console.log("subs");
        this.getData();
      }
    });


  }

  getData() {
    if (this.activeRoute.snapshot.params["category"] !== undefined)
      this.categoryType = (Number)(this.activeRoute.snapshot.params["category"]);
    console.log(typeof this.categoryType);
    switch (this.categoryType) {
      case CategoryType.Women:
        this.categoryTitle = "محصولات زنانه";
        break;
      case CategoryType.Men:
        this.categoryTitle = "محصولات مردانه";
        break;
    }

    this.getLatestProducts(this.categoryType);

  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  getLatestProducts(categoryType: CategoryType): void {
    this.isLoading = true;
    this.productRepo.getLatestProducts(categoryType, res => {
      this.latestProducts = res;
      console.log(this.latestProducts);
      this.isLoading = false;
    });
  }
}
