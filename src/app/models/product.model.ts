export class Product{

  public name:string = '';
  public urlImg:string = '';
  public price:number = 0;

  constructor(name: string, imgUrl: string, price: number){
    this.name = name;
    this.urlImg = imgUrl;
    this.price = price;
  }
}
