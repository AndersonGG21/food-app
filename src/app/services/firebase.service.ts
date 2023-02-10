import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private token : string = this.loginService.token;
  constructor(private httpClient : HttpClient, private loginService : LoginService) { };


  getOrders(){
    return this.httpClient.get(`https://clientsangular-89006-default-rtdb.firebaseio.com/orders.json?auth=${this.token}`)
  }


  saveOrders(order : Order){
    const token = this.loginService.token;
    this.httpClient.post('https://clientsangular-89006-default-rtdb.firebaseio.com/orders.json?auth='+token, order).subscribe(
      {complete: console.info}
    );
  }

  updateOrder(index : number, order : Order){
    this.httpClient.put(`https://clientsangular-89006-default-rtdb.firebaseio.com/orders/${2}.json`, order);
  }
}
