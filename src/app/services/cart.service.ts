import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/index';

export interface Product {
  id: number;
  title: string;
  description?: string;
  price: number;
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
    this.cart = [...this.cart, product];
    this.subject.next(this.cart);
  }

  removeFromCart(id: number) {
    this.cart = this.cart.filter(item => item.id !== id);
    this.subject.next(this.cart);
  }

  clearCart() {
    this.cart = [];
    this.subject.next(this.cart);
  }
}
