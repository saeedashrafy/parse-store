import {Injectable} from '@angular/core';
// @ts-ignore
import {Parse} from "parse";
import {Category, mapParseToCategories, mapParseToCategory} from "./category";
import {mapParseToProduct} from "./product";

@Injectable()
export class CategoryRepositoryService {

  constructor() {
  }

  getCategory(id:string){

    const category = new Parse.Object("Category");
    const query = new Parse.Query(category);
    query.equalTo("objectId", id);
    query.first().then((category: any) => {

    })
  }

  getAllCategories(success: (categories: Category[]) => void) {
    const category = new Parse.Object("Category");
    const query = new Parse.Query(category);
    query.find().then((res: any) => {
      success(mapParseToCategories(res));
    })
  }
}
