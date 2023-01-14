export class Product{

  public name:string = '';
  public urlImg:string = '';
  public price:number = 0;
  public category:string = '';
  public quantity: number = 0;

  constructor(name: string, imgUrl: string, price: number, category: string, quantity: number){
    this.name = name;
    this.urlImg = imgUrl;
    this.price = price;
    this.category = category;
    this.quantity = quantity;
  }
}
