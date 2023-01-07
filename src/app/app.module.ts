import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {InputNumberModule} from 'primeng/inputnumber';
import {StyleClassModule} from 'primeng/styleclass';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import {RatingModule} from 'primeng/rating';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { NgOptimizedImage } from '@angular/common';
import { DataViewComponent } from './components/data-view/data-view.component';
import { OrdersComponent } from './components/orders/orders.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'place-order', component: PlaceOrderComponent},
  {path: 'orders', component: OrdersComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    PlaceOrderComponent,
    DataViewComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InputNumberModule,
    StyleClassModule,
    CardModule,
    ButtonModule,
    MenubarModule,
    PasswordModule,
    InputTextModule,
    RouterModule.forRoot(appRoutes),
    NgOptimizedImage,
    DataViewModule,
    DropdownModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
