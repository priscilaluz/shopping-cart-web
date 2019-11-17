import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ItemComponent } from './item/item.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'item', component: ItemComponent },
    { path: 'login', component: LoginComponent },
    { path: 'shopping-cart/:id', component: ShoppingCartComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
