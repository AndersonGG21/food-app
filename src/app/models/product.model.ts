export class Product{

  public name:string = '';
  public urlImg:string = '';
  public price:number = 0;
  public category:string = ''

  constructor(name: string, imgUrl: string, price: number, category: string){
    this.name = name;
    this.urlImg = imgUrl;
    this.price = price;
    this.category = category;
  }
}
