import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() product;
  @Output() handleRemove: EventEmitter<any> = new EventEmitter();

  remove() {
    this.handleRemove.emit();
  }
}
