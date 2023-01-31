import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Order } from 'src/app/models/order.model';
import { Product } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers:  [MessageService]
})
export class OrdersComponent implements OnInit {
  order : Order = this.dataServive.getOrder();
  orderProducts: Product[] = [];

  constructor(private dataServive: DataService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.orderProducts = this.dataServive.order.getProducts();
  }

  refuseOrder() : void {
    this.order.setStatus();
    this.messageService.add({key: 'tc' ,severity:'warining', summary: 'Warining', detail: 'The orde have been refused'});
    console.log(`Status: ${this.order.getStatus()}`);
  }
}
