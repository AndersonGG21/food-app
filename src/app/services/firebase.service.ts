import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private token : string = this.loginService.getToken();
  constructor(private httpClient : HttpClient, private loginService : LoginService) { };


  getOrders(){
    console.log(this.token);
    return this.httpClient.get<Order[]>(`https://clientsangular-89006-default-rtdb.firebaseio.com/orders.json?auth=${this.token}`)

  }


  saveOrders(order : Order){
    this.httpClient.post('https://clientsangular-89006-default-rtdb.firebaseio.com/orders.json?auth='+this.token, order).subscribe(
      {complete: console.info}
    );
  }

  saveListOrder(orders : Order[]){
    this.httpClient.put('https://clientsangular-89006-default-rtdb.firebaseio.com/orders.json?auth='+this.token, orders).subscribe(
      {complete: console.info}
    );
  }

  updateOrder(index : number){
    return this.httpClient.get(`https://clientsangular-89006-default-rtdb.firebaseio.com/orders/${index}.json?auth=${this.token}`);
  }

  deleteOrder(index : number){
    this.httpClient.delete(`https://clientsangular-89006-default-rtdb.firebaseio.com/orders/${index}.json?auth=${this.token}`).subscribe({
        complete: () => console.log('complete'),
        error: (e) => console.error(e)
      }
    );
  }
}
