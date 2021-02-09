import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  email: string,
  password: string
};

@Injectable({
  providedIn: 'root',
})

export class AuthService {

  constructor(private http: HttpClient) {

  }

  login(user: User) {
    console.log("AUTH SERVICE CATCH USER", user);

    return this.http.post('http://api.events4me.iac.spb.ru/api/authorization/login', JSON.stringify(user))
  }

  logout() {

  }
}
