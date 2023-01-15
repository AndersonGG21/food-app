import { Product } from "./product.model";

export class Order{
  public date!: Date;
  public products: Product[] = [];

  constructor(products: Product[]){
    this.products = products;
  }

  getProducts(): Product[]{
    return this.products;
  }

  getDate(): number{
    const date = new Date();
    return date.getDay();
  }
}
