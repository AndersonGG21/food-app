import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Order } from 'src/app/models/order.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];

  constructor(private dataServive: DataService) {}

  ngOnInit(): void {
    this.orders = this.dataServive.getOrder();
  }
}
