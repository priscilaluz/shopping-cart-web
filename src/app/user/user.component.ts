import { Component, OnInit } from '@angular/core';
import { User } from '../shared/interfaces';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  constructor(protected userService: UserService) { }
  
  ngOnInit() {
    this.cleanUser();
    this.users = [];
    this.findAll();
  }
  cleanUser() {
    this.user = {
      id: null,
      name: null,
      email: null,
      shoppingcart: null
    };
  }
  erros: string;
  user: User;
  users: User[];

  save() {
    this.erros = null;
    this.userService.save(this.user)
    .then(() => {
      this.cleanUser();
      this.findAll();
    })
    .catch((e) => {
      if (e && e.error && e.error.message && e.error.message.split("BusinessException: ").length>1){
        this.erros = e.error.message.split("BusinessException: ")[1];
      }
    });
  }

  findAll() {
    this.userService.findAll()
      .then(response => this.users = response)
      .finally(() => {
      });
  }

  edit(id: string) {
    this.erros = null;
    this.userService.findById(id)
      .then(response => this.user = response)
      .finally(() => {
    });
  }
  delete(id: string) {
    this.erros = null;
    this.userService.delete(id).subscribe(
      (val) => {
        this.findAll();
      });
  }
  
  buyItems(id: string) {
    window.open("/shopping-cart/"+id, "_self");
  }

}