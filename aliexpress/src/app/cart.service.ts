import {Injectable} from '@angular/core';
import {Product} from './product';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new Map<Product, number>();

  constructor() {
  }

  public addToCart(product: Product): void {
    const amount = isNaN(this.cart.get(product)) ? 0 : this.cart.get(product);
    this.cart.set(product, amount + 1);
  }

  public changeAmount(product: Product, amount: number): void {
    this.cart.set(product, amount);
    if (amount <= 0) {
      this.delete(product);
    }
  }

  public delete(product: Product): void {
    this.cart.delete(product);
  }

  public getProducts(): Observable<Map<Product, number>> {
    return of(this.cart);
  }
}
