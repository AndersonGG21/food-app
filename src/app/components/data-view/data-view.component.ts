import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Product } from 'src/app/models/product.model';

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
  sortField: string = '';

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

}
