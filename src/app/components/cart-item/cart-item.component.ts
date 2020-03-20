import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() product;
  @Input() removeItem ;

  constructor() {
  }

  ngOnInit(): void {
  }


  remove() {
    this.removeItem(this.product.id);
  }

}