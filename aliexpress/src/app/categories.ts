export class Category {
  id: number;
  name: string;
  productsIds: number[];


  constructor(id:number, name:string, productsIds:number[]) {
    this.id = id;
    this.name = name;
    this.productsIds = productsIds;
  }
}

export const categories: Category[] = [
  new Category(1, 'Clothes', [10, 11, 12, 13, 14]),
  new Category(2, 'Accessories', [20, 21]),
  new Category(3, 'Cosmetics', [30, 31]),
  new Category(4, 'Furniture', [40, 41]),
  new Category(5, 'Party', [51, 52, 53]),
  new Category(6, 'Secret Shop', [60])
];
