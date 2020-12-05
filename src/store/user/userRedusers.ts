import {createReducer} from '@reduxjs/toolkit';
import {loginActionSuccess, regActionSuccess} from './userActions';
import {UserStore} from './userTypes';

export const userReducer = createReducer(
  {id: -1, name: '', email: ''} as UserStore,
  (builder) => {
    builder.addCase(loginActionSuccess, (state: UserStore, action) => {
      const {id, name, email} = action.payload;
      return {
        id: id,
        name: name,
        email: email,
      };
    });
    builder.addCase(regActionSuccess, (state: UserStore, action) => {
      const {id, email, name} = action.payload;
      return {
        id: id,
        email: email,
        name: name,
      };
    });
  },
);
