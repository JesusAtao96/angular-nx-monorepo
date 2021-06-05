import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as AuthFeature from './auth.reducer';
import * as AuthActions from './auth.actions';

import { User } from '@dc/models';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class AuthEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          // this.authService.login()

          const user = {} as User;
          return AuthActions.loginSuccess({ payload: user });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return AuthActions.loginFailure({ payload: error });
        }
      })
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
