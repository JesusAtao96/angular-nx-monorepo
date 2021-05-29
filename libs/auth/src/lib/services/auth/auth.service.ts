import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { Authenticate, User } from '@dc/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:3000';
  private userSubject$ = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject$.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  login(auth: Authenticate): Observable<User> {
    return this.http
      .post<User>(`${this.url}/login`, auth)
      .pipe(
        catchError(err => {
          console.log('error', err);
          this.userSubject$.next(null);
          return throwError(err);
        }),
        tap((user: User) => {
          this.userSubject$.next(user);
        }),
      );
  }

  logout(): void {
    this.userSubject$.next(null);
    this.router.navigate(['/']);
  }
}
