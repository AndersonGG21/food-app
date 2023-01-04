import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { InputNumber } from 'primeng/inputnumber';
import { Order } from 'src/app/models/order.model';
import { Product } from 'src/app/models/product.model';


@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css'],
})
export class PlaceOrderComponent implements OnInit {
  products: Product[] = [];
  delay: string = '100';
  order: Order[] = [];
  quantity: number = 0;
  total: number = 0;
  sortOptions: SelectItem[] = [];
  sortOrder: number = 0;
  sortField: string = '';
  sortKey: string = '';


  ngOnInit(): void {
    this.products = [
      new Product(
        'Burger',
        'https://www.eltiempo.com/files/image_640_428/uploads/2019/06/11/5d00446556664.jpeg',
        500
      ),
      new Product(
        'BBQ Ribs',
        'https://www.tasteefulrecipes.com/wp-content/uploads/2019/06/BBQ-Ribs-Plantain-Fries-1.jpg',
        700
      ),
      new Product(
        'BBQ Ribs',
        'https://www.tasteefulrecipes.com/wp-content/uploads/2019/06/BBQ-Ribs-Plantain-Fries-1.jpg',
        700
      ),
      new Product(
        'BBQ Ribs',
        'https://www.tasteefulrecipes.com/wp-content/uploads/2019/06/BBQ-Ribs-Plantain-Fries-1.jpg',
        700
      ),
      new Product(
        'BBQ Ribs',
        'https://www.tasteefulrecipes.com/wp-content/uploads/2019/06/BBQ-Ribs-Plantain-Fries-1.jpg',
        700
      ),
      new Product(
        'BBQ Ribs',
        'https://www.tasteefulrecipes.com/wp-content/uploads/2019/06/BBQ-Ribs-Plantain-Fries-1.jpg',
        700
      ),
      new Product(
        'BBQ Ribs',
        'https://www.tasteefulrecipes.com/wp-content/uploads/2019/06/BBQ-Ribs-Plantain-Fries-1.jpg',
        700
      ),
    ];

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' },
    ];
  }

  onSortChange(event:any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}

  addItem(product: Product, quantity: number): void {
    this.order.push(new Order(product, quantity));
    this.total += product.price * quantity;
  }

  cancelOrder() {
    this.order = [];
    this.total = 0;
  }
}
