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
      'Fast Food',
      0
    ),
    new Product(
      'BBQ Ribs',
      'https://www.tasteefulrecipes.com/wp-content/uploads/2019/06/BBQ-Ribs-Plantain-Fries-1.jpg',
      700,
      'Food',
      0
    ),
    new Product(
      'BBQ Ribs',
      'https://www.tasteefulrecipes.com/wp-content/uploads/2019/06/BBQ-Ribs-Plantain-Fries-1.jpg',
      700,
      'Food',
      0
    ),
    new Product(
      'BBQ Ribs',
      'https://www.tasteefulrecipes.com/wp-content/uploads/2019/06/BBQ-Ribs-Plantain-Fries-1.jpg',
      700,
      'Food',
      0
    ),
    new Product(
      'BBQ Ribs',
      'https://www.tasteefulrecipes.com/wp-content/uploads/2019/06/BBQ-Ribs-Plantain-Fries-1.jpg',
      700,
      'Food',
      0
    ),
    new Product(
      'BBQ Ribs',
      'https://www.tasteefulrecipes.com/wp-content/uploads/2019/06/BBQ-Ribs-Plantain-Fries-1.jpg',
      700,
      'Food',
      0
    ),
    new Product(
      'BBQ Ribs',
      'https://www.tasteefulrecipes.com/wp-content/uploads/2019/06/BBQ-Ribs-Plantain-Fries-1.jpg',
      700,
      'Food',
      0
    ),
  ];

  order: Order = new Order([new Product('Null', 'NUll', 0, 'null', 0)]);
  total: number = 0;

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getOrder(): Order {
    return this.order;
  }

  getOrderP(): Product[] {
    return this.order.getProducts();
  }

  getTotal(): number {
    // this.order.getProducts().forEach(p => {
    //   this.total += p.price * p.quantity;
    // });

    return this.total;
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  addItem(product: Product, number: number): void {
    if (this.order.getProducts().find((p) => p.name == product.name)) {
      const index = this.order
        .getProducts()
        .findIndex((p) => p.name == product.name);
      this.order.getProducts()[index].quantity += number;
    } else {
      product.quantity = number;
      this.order.getProducts().push(product);
    }

    this.total += product.price * number;
    console.log(this.total)
  }

  cancelOrder(): void {
    // this.order = [];
    this.total = 0;
    // return this.order;
  }
}
