// @ts-ignore
import {Parse} from "parse";
import {map} from "rxjs/operators";

export interface Category {
  id: string,
  title: string
}

export const mapParseToCategory = (category: Parse) => (<Category>{
  id: category.id,
  title: category.get("title"),
});

export const mapParseToCategories = (category: Parse[]) => category.map(category => (<Category>{
  id: category.id,
  title: category.get("title"),
}));

export enum CategoryType {
  Women,
  Men,

}
