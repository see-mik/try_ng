import {Component, OnInit} from '@angular/core';
import Products from '../data/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products;

  constructor() {
  }

  ngOnInit(): void {
    this.products = Products;
  }

}
