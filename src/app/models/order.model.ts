import { Product } from "./product.model";

export class Order{
  public product: Product = new Product('','',0);
  public quantity: number = 0;

  constructor(product:Product, quantity:number){
    this.product = product;
    this.quantity = quantity;
  }
}
