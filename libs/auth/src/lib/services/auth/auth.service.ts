import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Authenticate, User } from '@dc/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:3000';
  private userSubject$ = new BehaviorSubject<User>({} as User);
  user$ = this.userSubject$.asObservable();

  constructor(private http: HttpClient) { }

  login(auth: Authenticate): Observable<User> {
    return this.http
      .post<User>(`${this.url}/login`, auth)
      .pipe(
        tap((user: User) => this.userSubject$.next(user))
      );
  }
}
