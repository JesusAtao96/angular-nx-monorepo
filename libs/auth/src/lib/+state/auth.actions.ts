import { createAction, props } from '@ngrx/store';
import { Authenticate, AuthEntity, User } from '@dc/models';

const enum AuthActionTypes {
  Login = '[Auth Page] Login',
  LoginSuccess = '[Auth API] Login Success',
  LoginFail = '[Auth API] Login Fail',
}

// export const init = createAction('[Auth Page] Init');

export const login = createAction(
  AuthActionTypes.Login,
  props<{ payload: Authenticate }>()
);

export const loginSucess = createAction(
  AuthActionTypes.LoginSuccess,
  props<{ payload: User }>()
);

export const loginFailure = createAction(
  AuthActionTypes.LoginFail,
  props<{ payload: any }>()
);
