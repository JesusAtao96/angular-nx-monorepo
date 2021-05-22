import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Authenticate, User } from '@dc/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  login(auth: Authenticate): Observable<User> {
    return this.http.post<User>(`${this.url}/login`, auth);
  }
}