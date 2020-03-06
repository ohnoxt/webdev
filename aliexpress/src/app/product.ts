export class Product {
  id: number;
  name: string;
  price: number;
  link: string;
  rating: number;
  imagesLinks: string;
  categoryId: number;

  constructor(id: number, categoryId: number, name: string, price: number, rating: number, link: string, imagesLink: string) {
    this.id = id;
    this.price = price;
    this.imagesLinks = imagesLink;
    this.link = link;
    this.name = name;
    this.rating = rating;
    this.categoryId = categoryId;
  }
}
