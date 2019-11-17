import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/user.service';
import { ItemService } from '../shared/item.service';
import { ShoppingCartService } from '../shared/shopping-cart.service';
import { User, Item, Shopping } from '../shared/interfaces';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  idUser: string;
  user: User;
  erros: string;
  itens: Item[];
  shoppings: Shopping[];

  constructor(
    private modalService: NgbModal, 
    private route: ActivatedRoute, 
    protected userService: UserService, 
    protected itemService: ItemService,
    protected shoppingCartService: ShoppingCartService) {
      
    this.idUser = route.snapshot.params.id;
    this.erros = null;
    this.user = {
      id: null,
      name: null,
      email: null,
      shoppingcart: {
        id: null,
        total: 0,
        shoppings:[]
      }
    }
    this.shoppings = [];
  }

  findAll() {
    this.shoppings = [];
    this.itemService.findAll()
      .then(response => {
        response.forEach(i => {this.shoppings.push({id: null, amount: 0, item: i})});
      })
      .finally(() => {
      });
  }

  ngOnInit() {
    this.userService.findById(this.idUser)
      .then(response => this.user = response)
      .finally(() => {
    });
  }

  open(content) {
    this.findAll();
    this.modalService.open(content, {size: 'lg'}).result;
  }

  saveShoppings() {
    const shoppingCart = {id: this.user.shoppingcart.id, shoppings: [], total:null};
    this.shoppings.forEach(s => {
      if (s.amount > 0) {
        shoppingCart.shoppings.push(s);
      }
    });
    this.shoppingCartService.save(shoppingCart)
      .subscribe(() => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }

  deleteShopping(id: string) {
    this.erros = null;
    this.shoppingCartService.deleteShopping(id).subscribe(
      (val) => {
        this.ngOnInit();
      });
  }
  closeShopping() {
    this.erros = null;
    this.shoppingCartService.closeShoppingCart(this.user.shoppingcart)
      .then(response => this.user.shoppingcart = response)
      .finally(() => {
    });
  }
  
}
