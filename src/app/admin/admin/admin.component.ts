import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  links = [{icon: 'inventory_2', title: 'محصولات',url:'/admin'}, {icon: 'post_add', title: 'اضافه کردن محصول',url:'product/add'}, ];
  activeLink = this.links[0];
  constructor() {
  }

  ngOnInit(): void {
  }

}
