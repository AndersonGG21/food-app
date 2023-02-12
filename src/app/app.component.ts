import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import firebase from 'firebase/compat/app'

import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Food App';
  number:number = 10;



  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh)
    firebase.initializeApp({
      apiKey: "AIzaSyAZOX0E7NZfcjNWJ189qfH9JiNNHPeU82c",
      authDomain: "clientsangular-89006.firebaseapp.com"
    })
  }
}
