import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Order } from 'src/app/models/order.model';
import { Product } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orderProducts: Product[] = [];

  constructor(private dataServive: DataService) {}

  ngOnInit(): void {
    this.orderProducts = this.dataServive.getProducts();
  }
}
