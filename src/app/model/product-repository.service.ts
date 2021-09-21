import {Injectable} from '@angular/core';

// @ts-ignore
import {Parse} from "parse";
import {mapParseToProduct, mapParseToCategories, Product} from "./product";
import {Observable, of} from "rxjs";
import {CategoryType} from "./category";


@Injectable()
export class ProductRepositoryService {

  constructor() {
  }

  getAllProducts(success: (res: Product[]) => void) {
    const product = new Parse.Object("Product");
    const query = new Parse.Query(product);
    query.find().then((result: any) => {
        success(mapParseToCategories(result));
      }, (error: any) => {
      }
    );
  }

  getProduct(id: string, success: (res: Product) => void) {
    const product = new Parse.Object("Product");
    const query = new Parse.Query(product);
    query.equalTo("objectId", id);

    query.first().then((product: any) => {

        const categoryId = product.get('category').id;
        const category = new Parse.Object("Category");
        const query = new Parse.Query(category);
        query.equalTo("objectId", categoryId);
        query.first().then((category: any) => {

          success(mapParseToProduct(product, category));
        })

      }, (error: any) => {

      }
    )
  }

  getLatestProducts(categoryType: CategoryType,  success: (res: Product[]) => void,hasLimit: boolean = false,) {

    const product = new Parse.Object("Product");
    const category = new Parse.Object("Category");
    const innerQuery = new Parse.Query(category);
    innerQuery.equalTo("type", categoryType);
    const query = new Parse.Query(product);
    query.matchesQuery("category", innerQuery);
    query.descending("createdAt");
    if (hasLimit)
      query.limit(4);
    query.find().then((result: any) => {
        console.log(categoryType);
        success(mapParseToCategories(result));
      }, (error: any) => {
      }
    );

  }

  updateProduct(editing
                  :
                  boolean, object
                  :
                  any, file
                  :
                  any, callback
                  :
                  (isSuccessful: boolean) => void
  ) {
    const Product = new Parse.Object.extend("Product");
    const Category = new Parse.Object.extend("Category");
    const product = new Product();
    const category = new Category();
    const productAcl = new Parse.ACL();
    productAcl.setRoleWriteAccess("admin", true);
    productAcl.setPublicReadAccess(true);
    category.id = object.category.id;
    if (editing)
      product.set("objectId", object.id);
    product.set("title", object.title);
    product.set("price", object.price);
    product.set("category", category);
    product.set("stoneMaterial", object.stoneMaterial);
    product.set("weight", object.weight);
    product.setACL(productAcl);
    if (file !== null)
      product.set("file", file);
    product.save().then((res: any) => {
      callback(true);
    }, (error: any) => {
      callback(false);
    })
  }

  updateProductImage(image
                       :
                       any, successful
                       :
                       (file: any) => void
  ) {


    const parseFile = new Parse.File(image.name, image);
    parseFile.save().then((file: any) => {
      successful(file);
    }, function (error: any) {
      console.log("error " + error);
      //successful(false);
    });
  }

  deleteProduct(productId
                  :
                  string, callback
                  :
                  (isSuccessful: boolean) => void
  ) {
    const Product = new Parse.Object.extend("Product");
    const product = new Product();
    product.set("objectId", productId);
    product.destroy().then((object: any) => {
      callback(true);
    })
  }

}
