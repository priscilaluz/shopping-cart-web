import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/interfaces';
import { ItemService } from '../shared/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {

  constructor(protected itemService: ItemService) { }
  
  ngOnInit() {
    this.cleanItem();
    this.itens = [];
    this.findAll();
    
  }
  cleanItem() {
    this.item = {
      id: null,
      name: null,
      value: null
    };
  }
  erros: string;
  item: Item;
  itens: Item[];

  save() {
    this.erros = null;
    this.itemService.save(this.item)
    .then(() => {
      this.cleanItem();
      this.findAll();
    })
    .catch((e) => {
      if (e && e.error && e.error.message && e.error.message.split("BusinessException: ").length>1){
        this.erros = e.error.message.split("BusinessException: ")[1];
      }
    });
    
  }

  findAll() {
    this.itemService.findAll()
      .then(response => this.itens = response)
      .finally(() => {
      });
  }

  edit(id: string) {
    this.erros = null;
    this.itemService.findById(id)
      .then(response => this.item = response)
      .finally(() => {
    });
  }
  delete(id: string) {
    this.erros = null;
    this.itemService.delete(id).subscribe(
      (val) => {
        this.findAll();
      });
  }
  

}
