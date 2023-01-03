import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit{

  products: Product[] = [];
  delay: string = '100';
  order: any[] = [];
  quantity: number = 0;


  ngOnInit(): void {
    this.products = [
      new Product('Burger', 'https://www.eltiempo.com/files/image_640_428/uploads/2019/06/11/5d00446556664.jpeg', 500),
      new Product('BBQ Ribs', 'https://www.tasteefulrecipes.com/wp-content/uploads/2019/06/BBQ-Ribs-Plantain-Fries-1.jpg', 700),
      new Product('BBQ Ribs', 'https://www.tasteefulrecipes.com/wp-content/uploads/2019/06/BBQ-Ribs-Plantain-Fries-1.jpg', 700),
      new Product('BBQ Ribs', 'https://www.tasteefulrecipes.com/wp-content/uploads/2019/06/BBQ-Ribs-Plantain-Fries-1.jpg', 700),
    ]
  };

  addItem():void{
  }







}
