import {createReducer} from '@reduxjs/toolkit';
import {loginAction, regAction} from './userActions';
import {UserStore} from './userTypes';

export const userReducer = createReducer(
  {name: '', email: '', password: ''} as UserStore,
  (builder) => {
    builder
      .addCase(loginAction, (state, action) => state)
      .addCase(regAction, (state, action) => state);
  },
);
