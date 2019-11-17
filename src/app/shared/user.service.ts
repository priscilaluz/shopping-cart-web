import { Injectable } from '@angular/core';
import { User } from './interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string;

  constructor(private http: HttpClient) {
      this.url = 'http://localhost:8080/api/user';
  }
  save(user: User) {
      const urlFindAll=this.url;
      return this.http.post(urlFindAll, user).toPromise();
  }
  findAll(): Promise<User[]> {
      const urlFindAll=this.url+"/findAll";
      return this.http.get<User[]>(urlFindAll).toPromise();
  }

  findById(id: string): Promise<User> {
    const urlFindAll=this.url+"/findById/"+id;
    return this.http.get<User>(urlFindAll).toPromise();
  }

  findByNameEmail(name: string, email: string): Promise<User> {
    const urlFindAll=this.url+"/filter/"+name+"/"+email;
    return this.http.get<User>(urlFindAll).toPromise();
  }

  delete(id: string)  {
    const urlFindAll=this.url+"/"+id;
    return this.http.delete(urlFindAll);
  }
}
