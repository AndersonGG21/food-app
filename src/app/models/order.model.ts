import { Product } from "./product.model";

export class Order{
  public date!: string;
  public products: Product[] = [];
  public status: boolean = false;

  constructor(){this.date = new Date().toLocaleDateString()};

  getProducts(): Product[]{
    return this.products;
  }

  getDate(): string{
    return this.date.toLocaleString();
  }

  setStatus(): void{
    this.status = true;
  }

  getStatus(): boolean {
    return this.status;
  }
}
