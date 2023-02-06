import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string = '';
  password:string = '';
  name:string = '';


  constructor(private router: Router,private loginService : LoginService){}

  signIn(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.loginService.login(email,password);
    // this.router.navigate(['/place-order']);
  }
}
