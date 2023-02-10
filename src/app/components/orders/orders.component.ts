import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Order } from 'src/app/models/order.model';
import { Product } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers:  [MessageService]
})

export class OrdersComponent implements OnInit {
  orders: Order[] = this.dataServive.getOrders();
  forder: any;
  constructor(private dataServive: DataService, private messageService: MessageService, private httpClient : FirebaseService) {}

  ngOnInit(): void {
    // this.orders = this.dataServive.getOrders();
  }

  refuseOrder(o : Order) : void {
    this.removeOrder(o);
    this.messageService.add({key: 'tc' ,severity:'error', summary: 'Warning', detail: 'The order have been refused'});
  }

  acceptOrder(o : Order): void {
    o.setStatus();
    this.removeOrder(o)
    this.messageService.add({key: 'tc' ,severity:'success', summary: 'Success', detail: 'The orde have been accepted 😊'});

    this.httpClient.getOrders().subscribe(res =>{
      this.forder = res;
    });

    console.log(this.forder);
  }

  removeOrder(o: Order): void{
    const index = this.orders.findIndex(order => order == o);
    this.orders.splice(index,index + 1);
  }
}
