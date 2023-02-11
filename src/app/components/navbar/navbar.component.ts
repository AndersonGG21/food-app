import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  items: MenuItem[] = [];

  constructor(private router: Router, private loginService : LoginService){};

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/home'
      },
      {
        label: 'Place an order',
        icon: 'pi pi-fw pi-pencil',
        routerLink: '/place-order'
      },
      {
        label: 'Orders',
        icon: 'pi pi-fw pi-list',
        routerLink: '/orders'
      },
      // {
      //   label:'Quit',
      //   icon:'pi pi-fw pi-power-off'
      // }
    ];

  }

  logout() : void {
    this.loginService.logout();
  }


}
