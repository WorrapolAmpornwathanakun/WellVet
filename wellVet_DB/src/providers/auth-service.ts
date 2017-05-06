import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

export class User {
  name: string;
  email: string;
 
  constructor(name: string) {
    this.name = name;
  }
}

@Injectable()
export class AuthService {

  currentUser: User;
 
  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        let access = ((credentials.password === "pass" && credentials.email === "admin") || 
					  (credentials.password === "1234" && credentials.email === "user") ||
					  (credentials.password === "ionic" && credentials.email === "Umi"));
        this.currentUser = new User(credentials.email);
        observer.next(access);
        observer.complete();
      });
    }
  }
 
  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }
 
  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }

}
