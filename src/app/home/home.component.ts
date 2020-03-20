import {Component, OnInit} from '@angular/core';
import Products from '../data/products';
import {CartService, Product} from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[];

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.products = Products;
  }

  addToCart(product: Product): any {
    this.cartService.addToCart(product);
  }
}
