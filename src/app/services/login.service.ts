import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { CookieService } from 'ngx-cookie-service/public-api';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  token: string = '';

  constructor(private router : Router, private cookies : CookieService) { }

  login(email : string, password : string){
    alert("Holaa");
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      response => {
        firebase.auth().currentUser?.getIdToken().then(
          token => (
            this.token = token,
            this.cookies.set("token",this.token),
            this.router.navigate(['/home'])
          )
        )
      }
    ).catch((error) => {
      window.alert(error)
    });

  };

  logout(){
    firebase.auth().signOut().then(() => {
      this.token = "";
      this.cookies.set("token", this.token);
      this.router.navigate(['/']);
    })
  }

  getToken(){
    return this.cookies.get("token");
  }
}
