import {LoginActionRequestPd} from './user/userActions';

const urlBase = 'https://trello-purrweb.herokuapp.com/';

export const Api = {
  userLogin: async (user: LoginActionRequestPd) =>
    fetch(urlBase + 'auth/sign-in', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: {
        email: user.email,
        password: user.password,
      },
    }).then((resp) => resp.json()),
};
