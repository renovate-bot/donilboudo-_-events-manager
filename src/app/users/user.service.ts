import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do'
import { Subject } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { User } from './user.model';

@Injectable()
export class UserService {
  users: User[];

  constructor(private http: Http) { }

  addUser(user: User) {
    user.id = Date.now();
      return this.http.post('/users', user)
      .map(res => new User(res.json()));
  }

  getUser(userId: Number) {
    return this.http.get(`/users/${userId}`)
                    .map(res => new User(res.json()));
  }

  getUsers() {
    return this.http.get(`/users`)
                    .map(res => new User(res.json()));
  }

  updateUser(user: User){
    return this.http.put(`/users/${user.id}`, user);
  }

  deleteUser(userId: Number) {
    return this.http.delete(`/users/${userId}`)
  }
}
