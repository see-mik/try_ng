import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss']
})
export class CartModalComponent {
  products;
  count = 0;
  total = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private dialog: MatDialog,
    private cartService: CartService
  ) {
    this.cartService.getCart().subscribe(cart => {
      this.products = cart;
      this.count = cart.length;
      this.total = cart.reduce((sum, item) => sum + item.price, 0);
    });
  }

  onPurchase() {
    alert('Now go to payment !');

    this.dialog.closeAll();
  }

  removeItem(id) {
    this.cartService.removeFromCart(id);
  }
}
