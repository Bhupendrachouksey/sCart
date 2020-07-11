import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ShoppingItemsComponent } from './shopping-items/shopping-items.component';
import { ItemsCartComponent } from './items-cart/items-cart.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'product', component: ShoppingItemsComponent},
  { path: 'item-details/:id', component: ItemDetailComponent},
  { path: 'cart', component: ItemsCartComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}