import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {CategoryService} from '../category.service';
import {ActivatedRoute} from '@angular/router';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  constructor(
    public categoryService: CategoryService,
    public cartService: CartService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getProduct();
  }

  public getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('productId');
    this.categoryService.getProduct(id).subscribe(prd => this.product = prd);
  }

}
