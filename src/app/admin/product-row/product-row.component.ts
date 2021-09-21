import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Product} from "../../model/product";
import {ProductRepositoryService} from "../../model/product-repository.service";


@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
  @Input() product?: Product;
  @Output() productDeleted = new EventEmitter<{ productId: string }>();

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteProduct(product: any) {
    this.productDeleted.emit({productId: product.id});

  }
}
