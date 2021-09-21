// @ts-ignore
import {Parse} from "parse";
import {Category, mapParseToCategory} from "./category";

export interface Product {
  id: string,
  title: string,
  price: string,
  imageUrl: string,
  imageName?: string,
  category?: Category,
  stoneMaterial?: string,
  weight?: number,
  file?: File,

}

export const mapParseToCategories = (response: Parse[]) => response.map((product) => {
  return <Product>{
    id: product.id,
    title: product.get("title"),
    price: product.get("price"),
    imageUrl: product.get("file")?.url(),
    imageName: product.get("file")?.name(),
    weight:product.get("weight"),
    stoneMaterial:product.get("stoneMaterial"),
  }
})

export const mapParseToProduct = (product: Parse, category: Parse) => (<Product>{
  id: product.id,
  title: product.get("title"),
  price: product.get("price"),
  imageUrl: product.get("file")?.url(),
  imageName: product.get("file")?.name(),
  category: mapParseToCategory(category),
  weight:product.get("weight"),
  stoneMaterial:product.get("stoneMaterial"),
})


