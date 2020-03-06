import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {CategoryService} from '../category.service';
import {ActivatedRoute} from '@angular/router';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(
    public categoryService: CategoryService,
    public cartService: CartService,
    private route: ActivatedRoute,
  ) {
  }

  private getProducts(): void {
    const id = +this.route.snapshot.paramMap.get('categoryId');
    this.categoryService.getProductsFromCategory(id).subscribe(products => this.products = products);
  }

  ngOnInit(): void {
    this.getProducts();
  }
}
