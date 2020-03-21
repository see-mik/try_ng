import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/index';

export interface Product {
  id: number;
  title: string;
  description?: string;
  price: number;
  count?: number;
}

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cart = [];
  private subject = new BehaviorSubject(this.cart);

  constructor() {
  }

  getCart() {
    return this.subject;
  }

  addToCart(product: Product) {
    const entry = this.cart.find(item => item.id === product.id);

    if (!entry) {
      product.count = 1;

      this.cart = [...this.cart, product];
    } else {
      this.cart.map(item => {
        if (item.id === product.id) {
          item.count = item.count + 1;
          return item;
        }

        return item;
      });

    }

    this.subject.next(this.cart);
  }

  removeFromCart(id: number) {
    this.cart = this.cart.filter(item => {
      if (item.count > 1) {
        item.count = item.count - 1;
        return item;
      }

      return item.id !== id;
    });

    this.subject.next(this.cart);
  }

  clearCart() {
    this.cart = [];
    this.subject.next(this.cart);
  }
}
