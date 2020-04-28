import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { CartComponent } from './cart/cart.component';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { CartService } from './cart/cart.service';
import { OrderComponent } from './order/order.component';
import { OrderService } from './order/order.service';
import { DrinkComponent } from './components/drink/drink.component';
import { ValidationComponent } from './components/validation/validation.component';
import { ModalComponent } from './components/modal/modal.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CartComponent,
    HamburgerComponent,
    OrderComponent,
    DrinkComponent,
    ValidationComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
  ],
  providers: [OrderService, CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
