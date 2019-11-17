import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ItemComponent } from './item/item.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NumericDirective } from './shared/NumericDirective';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    ItemComponent,
    ShoppingCartComponent,
    NumericDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LayoutModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
