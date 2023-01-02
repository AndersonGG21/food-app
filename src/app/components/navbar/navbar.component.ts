import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home'
      },
      {
        label: 'Place an order',
        icon: 'pi pi-fw pi-pencil'
      },
      {
        label: 'Orders',
        icon: 'pi pi-fw pi-list'
      },
      // {
      //   label:'Quit',
      //   icon:'pi pi-fw pi-power-off'
      // }
    ];

  }


}
