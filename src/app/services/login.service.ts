import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token: string = '';

  constructor(private router : Router) { }

  login(email : string, password : string){
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      response => {
        firebase.auth().currentUser?.getIdToken().then(
          token => (
            this.token = token,
            this.router.navigate(['/home'])
          )
        )
      }
    );
  };
}
