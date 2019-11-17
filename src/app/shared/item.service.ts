import { Injectable } from '@angular/core';
import { Item } from './interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url: string;

  constructor(private http: HttpClient) {
      this.url = 'http://localhost:8080/api/item';
  }
  save(item: Item) {
      const urlFindAll=this.url;
      return this.http.post(urlFindAll, item).toPromise();
  }
  findAll(): Promise<Item[]> {
      const urlFindAll=this.url+"/findAll";
      return this.http.get<Item[]>(urlFindAll).toPromise();
  }

  findById(id: string): Promise<Item> {
    const urlFindAll=this.url+"/findById/"+id;
    return this.http.get<Item>(urlFindAll).toPromise();
  }

  delete(id: string)  {
    const urlFindAll=this.url+"/"+id;
    return this.http.delete(urlFindAll);
  }
}
