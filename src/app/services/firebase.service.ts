import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private httpClient : HttpClient, private loginService : LoginService) { };

  saveOrders(order : Order){
    const token = this.loginService.token;
    this.httpClient.post('https://clientsangular-89006-default-rtdb.firebaseio.com/orders.json?auth='+token, order).subscribe(
      {complete: console.info}
    );
  }
}
