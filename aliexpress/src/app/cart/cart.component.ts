import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart = new Map<Product, number>();

  constructor(public cartService: CartService) {
  }

  ngOnInit(): void {
    this.retrieveCart();
  }

  public retrieveCart(): void {
    this.cartService.getProducts().subscribe(cart => this.cart = cart);
    // this.cart.set(products[0], 1);
  }
}
