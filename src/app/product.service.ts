import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Product} from "./model/product";
import {latestProducts} from "./mock-products";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getLatestProducts():Observable<Product[]>{
    return  of(latestProducts);
  }
}
