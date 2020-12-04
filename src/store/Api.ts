import {
  AuthSignUpReqDto,
  AuthSignUpSuccessDto,
} from '../dto/auth/AuthSignUpDtos';
import {
  AuthSignInReqDto,
  AuthSignInSuccessDto,
} from '../dto/auth/AuthSingInDtos';

class Api {
  #urlBase: string = '';
  #token: string = '';

  constructor(baseUrl: string) {
    this.#urlBase = baseUrl;
  }

  async signIn(user: AuthSignInReqDto) {
    return fetch(this.#urlBase + 'auth/sign-in', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: user,
    })
      .then((resp) => resp.json())
      .then((json: AuthSignInSuccessDto) => {
        this.#token = json.token;
        return json;
      });
  }

  async singUp(user: AuthSignUpReqDto) {
    return fetch(this.#urlBase + 'auth/sign-up', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: user,
    })
      .then((resp) => resp.json())
      .then((json: AuthSignUpSuccessDto) => {
        this.#token = json.token;
        return json;
      });
  }
}

export const API: Api = new Api('https://trello-purrweb.herokuapp.com/');
