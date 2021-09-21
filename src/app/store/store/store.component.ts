import {Component, OnInit} from '@angular/core';
import {CategoryType} from "../../model/category";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  links = [{icon: 'home', title: 'صفحه اصلی', url: ''}, {
    icon: 'female',
    title: 'محصولات زنانه',
    url: 'category/' + CategoryType.Women + '/products'
  }, {
    icon: 'male',
    title: 'محصولات مردانه',
    url: 'category/' + CategoryType.Men + '/products'
  }, {icon: 'contact_support', title: 'درباره ما', url: 'about'}];
  activeLink = this.links[0];
  title = 'zoya-jewelry';

  constructor() {
  }

  ngOnInit(): void {
  }

}
