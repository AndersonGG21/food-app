import { Injectable, OnInit } from '@angular/core';
import { Order } from '../models/order.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})

export class DataService {
  products: Product[] = [
    new Product(
      'Burger',
      'https://www.eltiempo.com/files/image_640_428/uploads/2019/06/11/5d00446556664.jpeg',
      500,
      'Fast Food'
    ),
    new Product(
      'BBQ Ribs',
      'https://www.tasteefulrecipes.com/wp-content/uploads/2019/06/BBQ-Ribs-Plantain-Fries-1.jpg',
      700,
      'Food'
    ),
    new Product(
      'BBQ Ribs',
      'https://www.tasteefulrecipes.com/wp-content/uploads/2019/06/BBQ-Ribs-Plantain-Fries-1.jpg',
      700,
      'Food'
    ),
    new Product(
      'BBQ Ribs',
      'https://www.tasteefulrecipes.com/wp-content/uploads/2019/06/BBQ-Ribs-Plantain-Fries-1.jpg',
      700,
      'Food'
    ),
    new Product(
      'BBQ Ribs',
      'https://www.tasteefulrecipes.com/wp-content/uploads/2019/06/BBQ-Ribs-Plantain-Fries-1.jpg',
      700,
      'Food'
    ),
    new Product(
      'BBQ Ribs',
      'https://www.tasteefulrecipes.com/wp-content/uploads/2019/06/BBQ-Ribs-Plantain-Fries-1.jpg',
      700,
      'Food'
    ),
    new Product(
      'BBQ Ribs',
      'https://www.tasteefulrecipes.com/wp-content/uploads/2019/06/BBQ-Ribs-Plantain-Fries-1.jpg',
      700,
      'Food'
    ),
  ];

  order: Order[] = [];
  total: number = 0;


  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getOrder(): Order[]{
    return this.order;
  }

  getTotal(): number{
    return this.total;
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  addItem(product: Product, quantity: number): void {
    this.order.push(new Order(product, quantity));
    this.total += product.price * quantity;
    console.log(this.total);
  }
}
