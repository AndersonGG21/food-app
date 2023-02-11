import { Injectable, OnInit } from '@angular/core';
import { Order } from '../models/order.model';
import { Product } from '../models/product.model';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  products: Product[] = [
    new Product(
      'Classic Burger',
      'https://www.eltiempo.com/files/image_640_428/uploads/2019/06/11/5d00446556664.jpeg',
      8.99,
      'Burgers',
      0
    ),
    new Product(
      'Chicken Parmesan',
      'https://assets.bonappetit.com/photos/5ea8f0df16738800085ad5d2/1:1/w_2560%2Cc_limit/Chicken-Parmesean-Recipe-Lede.jpg',
      12.99,
      'Poultry',
      0
    ),
    new Product(
      'BBQ Ribs',
      'https://www.tasteefulrecipes.com/wp-content/uploads/2019/06/BBQ-Ribs-Plantain-Fries-1.jpg',
      20,
      'Food',
      0
    ),
    new Product(
      'Spaghetti Bolognese',
      'https://www.errenskitchen.com/wp-content/uploads/2015/02/Quick-Easy-Spaghetti-Bolognese2-1-500x480.jpg',
      10.99,
      'Pasta',
      0
    ),
    new Product(
      'Caesar Salad',
      'https://assets.bonappetit.com/photos/624215f8a76f02a99b29518f/3:4/w_1812,h_2416,c_limit/0328-ceasar-salad-lede.jpg',
      7.99,
      'Salads',
      0
    ),
    new Product(
      'Sushi Rolls',
      'https://www.justonecookbook.com/wp-content/uploads/2020/01/Sushi-Rolls-Maki-Sushi-%E2%80%93-Hosomaki-1106-II.jpg',
      14.99,
      'Sushi',
      0
    ),
  ];

  order: Order = new Order();
  oreders: Order[] = [];
  orders: any;
  total: number = 0;

  constructor(private fireb : FirebaseService) {}

  getProducts(): Product[] {
    return this.products;
  }

  getOrder(): Order {
    return this.order;
  }

  getOrders(): Order[] {
    console.log("Suwiiii")
    this.fireb.getOrders().subscribe(response => {
      this.oreders = Object.values(response);
    })
    return this.oreders;
  }

  getOrderP(): Product[] {
    return this.order.getProducts();
  }

  getTotal(): number {
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
  }

  sendOrder(): void {
    this.oreders.push(this.order);
    console.log(this.order);
    this.fireb.saveOrders(this.order);
    this.order = new Order();
    this.total = 0;
  }

  sendOrders(): void{
    this.oreders.push(this.order);
    console.log(this.order);
    this.fireb.saveListOrder(this.oreders);
    this.order = new Order();
    this.total = 0;
  }

  cancelOrder(): void {
    this.order.products = [];
    this.total = 0;
  }

  deleteOrder(index : number): void {
    this.fireb.deleteOrder(index);
  }
}
