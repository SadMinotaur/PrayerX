import {createReducer} from '@reduxjs/toolkit';
import {loginActionSuccess} from './userActions';
import {UserStore} from './userTypes';

export const userReducer = createReducer(
  {id: -1, name: '', email: '', token: ''} as UserStore,
  (builder) => {
    builder.addCase(loginActionSuccess, (state: UserStore, action) => {
      const {id, name, email, token} = action.payload;
      return {
        id: id,
        name: name,
        email: email,
        token: token,
      };
    });
  },
);
