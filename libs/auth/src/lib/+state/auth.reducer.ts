import { createReducer, on, Action } from '@ngrx/store';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as AuthActions from './auth.actions';
import { AuthEntity, State } from '@dc/models';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: State;
}

export const authAdapter: EntityAdapter<AuthEntity> = createEntityAdapter<AuthEntity>();

export const initialState: State = authAdapter.getInitialState({
  // set initial required properties
  loaded: false
});

const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({ ...state, loaded: false, error: null })),
  on(AuthActions.loginSuccess, state =>  ({ ...state, loaded: true })),
  on(AuthActions.loginFailure, (state) => ({ ...state, user: null, loaded: false }))
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}
