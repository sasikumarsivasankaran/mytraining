import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
// import {FormsModule} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { ShowSalesMenComponent } from './show-sales-men/show-sales-men.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { OrderConfimedComponent } from './order-confimed/order-confimed.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PaymentComponent } from './payment/payment.component';
import { UnderlineDirective } from './underline.directive';
import { HighLightDirective } from './high-light.directive';
import { FilterPipe } from './filter.pipe';
import { ShowItemsComponent } from './show-items/show-items.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ContentComponent,
    ShowSalesMenComponent,
    MenuComponent,
    OrderComponent,
    OrderConfimedComponent,
    LoginComponent,
    LogoutComponent,
    PaymentComponent,
    UnderlineDirective,
    HighLightDirective,
    FilterPipe,
    ShowItemsComponent,
    RestaurantDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient],
  entryComponents: [PaymentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
