import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit{

  products: Product[] = [];
  delay: string = '100';
  order: Order[] = [];
  quantity: number = 0;
  total: number = 0;


  ngOnInit(): void {
    this.products = [
      new Product('Burger', 'https://www.eltiempo.com/files/image_640_428/uploads/2019/06/11/5d00446556664.jpeg', 500),
      new Product('BBQ Ribs', 'https://www.tasteefulrecipes.com/wp-content/uploads/2019/06/BBQ-Ribs-Plantain-Fries-1.jpg', 700),
      new Product('BBQ Ribs', 'https://www.tasteefulrecipes.com/wp-content/uploads/2019/06/BBQ-Ribs-Plantain-Fries-1.jpg', 700),
      new Product('BBQ Ribs', 'https://www.tasteefulrecipes.com/wp-content/uploads/2019/06/BBQ-Ribs-Plantain-Fries-1.jpg', 700),
    ]
  };

  addItem(product:Product, quantity:number):void{
    this.order.push(new Order(product,quantity));
    this.total += product.price * quantity;
  }

  cancelOrder(){
    this.order = [];
    this.total = 0;
  }

}
