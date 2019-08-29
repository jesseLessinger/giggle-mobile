import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
}) 
export class UserService {

  constructor() { }

  private user = {
    id: 0,
    username: null,
    email: null,
  }


  public setUser(user) {
    this.user = user; 
  }

  public setUsername(name) {
    this.user.username = name;
  }

  public getUser() {
    return this.user;
  }

  public getUsername() {
    return this.user.username;
  }

  public getUserId() {
    return this.user.id;
  }
}
