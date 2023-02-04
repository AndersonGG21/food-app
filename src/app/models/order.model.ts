import { Product } from "./product.model";

export class Order{
  public date!: Date;
  public products: Product[] = [];
  public status: boolean = false;

  // constructor(products: Product[]){
  //   this.products = products;
  // }

  constructor(){};

  getProducts(): Product[]{
    return this.products;
  }

  getDate(): Date{
    const date = new Date();
    return date;
  }

  setStatus(): void{
    this.status = true;
  }

  getStatus(): boolean {
    return this.status;
  }
}
