import {createAction} from '@reduxjs/toolkit';

export interface LoginActionRequestPd {
  email: string;
  password: string;
}
export const loginActionRequest = createAction<LoginActionRequestPd>(
  'LOGIN_USER_REQUEST',
);
export interface LoginUserSuccessPd {
  id: number;
  email: string;
  name: string;
  token: string;
}
export const loginActionSuccess = createAction<LoginUserSuccessPd>(
  'LOGIN_USER_SUCCESS',
);
export interface LoginActionFailurePd {
  error: string;
}
export const loginActionFailure = createAction<LoginActionFailurePd>(
  'LOGIN_USER_FAILURE',
);

export interface RegActionPd {
  email: string;
  name: string;
  password: string;
}
export const regAction = createAction<RegActionPd>('REG_USER_REQUEST');
export const regActionSuccess = createAction<{}>('LOGIN_USER_SUCCESS');
export interface regActionFailurePd {
  error: string;
}
export const regActionFailure = createAction<regActionFailurePd>(
  'LOGIN_USER_FAILURE',
);
