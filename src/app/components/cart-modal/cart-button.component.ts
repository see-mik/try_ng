import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CartModalComponent} from './cart-modal.component';

@Component({
  selector: 'app-cart-button',
  template: `
    <button class="btn _default"
      (click)="openCart()">
        <span class="_flex">
          Cart
          <strong>{{count}}</strong>
        </span>
    </button>`
})
export class CartButtonComponent {
  @Input() count;

  constructor(public dialod: MatDialog) {
  }

  openCart() {
    this.dialod.open(CartModalComponent);
  }
}
