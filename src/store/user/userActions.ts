import {createAction} from '@reduxjs/toolkit';

export const loginAction = createAction<{email: string; password: string}>(
  'LOGIN_USER',
);
export const regAction = createAction<{
  email: string;
  name: string;
  password: string;
}>('REG_USER');
