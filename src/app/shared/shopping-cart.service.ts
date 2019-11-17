import { Injectable } from '@angular/core';
import { ShoppingCart } from './interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  url: string;

  constructor(private http: HttpClient) {
      this.url = 'http://localhost:8080/api/shoppingCart';
  }
  save(shoppingCart: ShoppingCart) {
      const urlFindAll=this.url;
      return this.http.post(urlFindAll, shoppingCart);
  }
  deleteShopping(id: string) {
    const urlFindAll=this.url+"/deleleShopping/"+id;
    return this.http.delete(urlFindAll);
  }
  closeShoppingCart(shoppingCart: ShoppingCart): Promise<ShoppingCart> {
    const urlFindAll=this.url+"/closeShoppingCart";
    return this.http.put<ShoppingCart>(urlFindAll, shoppingCart).toPromise();
  }
}
