import {PayloadAction} from '@reduxjs/toolkit';
import {LoginActionRequestPd} from './user/userActions';

const urlBase = 'https://trello-purrweb.herokuapp.com/';

export const Api = {
  userLogin: async (user: PayloadAction<LoginActionRequestPd>) =>
    fetch(urlBase + 'auth/sign-in', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: {
        email: user.payload.email,
        password: user.payload.password,
      },
    }).then((resp) => resp.json()),
};
