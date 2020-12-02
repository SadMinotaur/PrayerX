import {UserStore} from './user/userTypes';

const urlBase = 'https://trello-purrweb.herokuapp.com/';

export const Api = {
  userReg: fetch('https://trello-purrweb.herokuapp.com/' + 'auth/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      name: 'test',
      email: 'test',
      password: 'test',
    } as UserStore,
  }),
};
