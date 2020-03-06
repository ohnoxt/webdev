import {Component, OnInit} from '@angular/core';
import {categories, Category} from '../categories';
import {of} from 'rxjs';
import {CategoryService} from '../category.service';
import {products} from '../products';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];

  constructor(categoryService: CategoryService) {
  }

  private getCategories(): void {
    of(categories).subscribe(cat => this.categories = cat);
  }

  public getRandomImage(categoryId: number): string {
    const prods = products.filter(prd => prd.categoryId === categoryId);
    return prods[Math.floor(Math.random() * prods.length)].imagesLinks;
  }

  ngOnInit(): void {
    this.getCategories();
  }
}
