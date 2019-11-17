import { Component, OnInit } from '@angular/core';
import { User } from '../shared/interfaces';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(protected userService: UserService) { }
  
  ngOnInit() {
    this.cleanUser();
    
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

  login() {
    this.erros = null;
    this.userService.findByNameEmail(this.user.name, this.user.email)
      .then((user) => {
        window.open("/shopping-cart/"+user.id, "_self")
      })
      .catch((e) => {
        if (e && e.error && e.error.message && e.error.message.split("BusinessException: ").length>1){
          this.erros = e.error.message.split("BusinessException: ")[1];
        }
      });
  }
}
