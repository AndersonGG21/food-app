import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Data } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { Product } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css']
})
export class DataViewComponent implements OnInit{

  products!: Product[];
  sortOptions: SelectItem[] = [
    {label: 'Newest First', value: '!price'},
    {label: 'Oldest First', value: 'price'}
  ];
  sortOrder: number = 0;
  quantity: number = 0;
  sortField: string = '';
  total: number = 0;
  @Output() newItemEvent = new EventEmitter<number>();

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.products = this.dataService.getProducts();
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

  addItem(product: Product, quantity: number):void{
    product.quantity = quantity;
    this.dataService.addItem(product);
    this.total = this.dataService.getTotal();
    this.getTotal();
  }

  getTotal():void{
    this.newItemEvent.emit(this.total);
  }

}
