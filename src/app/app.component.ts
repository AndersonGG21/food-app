import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';

import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'food-app';
  number:number = 10;



  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh)
  }
}
