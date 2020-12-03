import {Alert} from 'react-native';
import {AuthSignUpDto} from '../dto/auth/AuthSignUpDto';
import {AuthSignInDto} from '../dto/auth/AuthSingInDto';
import {LoginUserSuccessPd, RegActionSuccessPd} from './user/userActions';

class Api {
  urlBase: string;
  token: string = '';

  constructor(baseUrl: string) {
    if (baseUrl === '') {
      Alert.alert('Wrong url');
      // TODO: do something
    }
    this.urlBase = baseUrl;
  }

  async signIn(user: AuthSignInDto) {
    fetch(this.urlBase + 'auth/sign-in', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: user,
    })
      .then((resp) => resp.json())
      .then((json: LoginUserSuccessPd) => {
        this.token = json.token;
        return json;
      });
  }

  async singUp(user: AuthSignUpDto) {
    // fetch(this.urlBase + 'auth/sign-up', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: user,
    // })
    //   .then((resp) => resp.json())
    //   .then((json: RegActionSuccessPd) => {
    //     return json;
    //   });
  }
}

export default new Api('https://trello-purrweb.herokuapp.com/');
