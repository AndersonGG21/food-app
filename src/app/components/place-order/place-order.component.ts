import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { InputNumber } from 'primeng/inputnumber';
import { Order } from 'src/app/models/order.model';
import { Product } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';
import { DataViewComponent } from '../data-view/data-view.component';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css'],
})
export class PlaceOrderComponent implements OnInit {
  products: Product[] = [];
  delay: string = '100';
  order: Order[] = this.dataService.getOrder();
  quantity: number = 0;
  sortOptions: SelectItem[] = [];
  sortOrder: number = 0;
  sortField: string = '';
  sortKey: string = '';
  total: number= 0;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {}

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  setTotal(total: number){
    this.total = total;
  }

  cancelOrder() {
    this.order = this.dataService.cancelOrder();
    this.total = 0;
  }

  sendOrder(): void {
    this.router.navigate(['/orders']);
  }
}
