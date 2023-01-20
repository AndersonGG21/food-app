import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css'],
})
export class PlaceOrderComponent implements OnInit {
  products: Product[] = [];
  delay: string = '100';
  orderProducts: Product[] = [];
  quantity: number = 0;
  total: number= 0;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.orderProducts = this.dataService.getOrderP();
  }

  setTotal(total: number){
    this.total = total;
  }

  cancelOrder() {
    this.total = 0;
  }

  sendOrder(): void {
    this.router.navigate(['/orders']);
  }
}
