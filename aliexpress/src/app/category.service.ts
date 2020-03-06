import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Product} from './product';
import {categories, Category} from './categories';
import {products} from './products';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] = categories;

  constructor() {
  }

  public getProductsFromCategory(categoryId: number): Observable<Product[]> {
    return of(products.filter(prd => prd.categoryId === categoryId));
  }

  public getProduct(productId: number): Observable<Product> {
    return of(products.find(prd => prd.id === productId));
  }
}
