import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../model/product";

@Component({
  selector: 'app-latest-product',
  templateUrl: './latest-product.component.html',
  styleUrls: ['./latest-product.component.css']
})
export class LatestProductComponent implements OnInit {
  @Input() product?: Product;

  constructor() {
  }

  ngOnInit(): void {
  }

}
