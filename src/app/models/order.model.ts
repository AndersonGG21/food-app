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

  getDate(): number{
    const date = new Date();
    return date.getDay();
  }

  setStatus(flag : boolean): void{
    this.status = flag;
  }

  getStatus(): boolean {
    return this.status;
  }
}
