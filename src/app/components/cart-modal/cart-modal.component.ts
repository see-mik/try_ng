import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss']
})
export class CartModalComponent {
  products;

  constructor(@Inject(MAT_DIALOG_DATA) public data,
              private cartService: CartService) {
    this.cartService.getCart().subscribe(cart => {
      this.products = cart;
    });
  }

  onPurchase() {
  }

  removeItem(i) {
    this.cartService.removeFromCart(i);
  }
}
