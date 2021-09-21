import {Component, OnInit} from '@angular/core';
import {CategoryType} from "../../model/category";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  get CategoryTypes(): typeof CategoryType {
    return CategoryType;
  }

}
