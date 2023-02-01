import { Product } from "./product.model";

export class Order{
  public date!: Date;
  public products: Product[] = [];
  public status: boolean = true;

  constructor(products: Product[]){
    this.products = products;
  }

  getProducts(): Product[]{
    return this.products;
  }

  getDate(): Date{
    const date = new Date();
    return date;
  }

  setStatus(): void{
    this.status = false;
  }

  getStatus(): boolean {
    return this.status;
  }
}
