import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  inCart;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.getCart().subscribe(cart => {
      this.inCart = cart.reduce((sum, item) => sum + item.count, 0);
    });
  }

  ngOnDestroy(): void {
    this.cartService.getCart().unsubscribe();
  }

}
