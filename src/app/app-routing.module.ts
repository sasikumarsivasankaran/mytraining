import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from 'src/app/content/content.component';
import { ShowSalesMenComponent } from 'src/app/show-sales-men/show-sales-men.component';
import { ShowItemsComponent } from 'src/app/show-items/show-items.component';
import { OrderComponent } from 'src/app/order/order.component';
import { LoginComponent } from './login/login.component';
import { UniversalGaurdGuard } from 'src/app/universal-gaurd.guard';
import { LogoutComponent } from 'src/app/logout/logout.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';

const routes: Routes = [{
  path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  // {path: 'restaurant', component: ContentComponent},
  {path: 'restaurant', component: ContentComponent, canActivate: [UniversalGaurdGuard]},
  {path: 'details/:code', component: RestaurantDetailsComponent, canActivate: [UniversalGaurdGuard]},
  {path: 'salesMen', component: ShowSalesMenComponent, canActivate: [UniversalGaurdGuard]},
  {path: 'items', component: ShowItemsComponent},
  {path: 'orders', component: OrderComponent},
  {path: '**', redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
