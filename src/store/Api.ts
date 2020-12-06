import {
  AuthSignUpReqDto,
  AuthSignUpSuccessDto,
} from '../dto/auth/AuthSignUpDtos';
import {
  AuthSignInReqDto,
  AuthSignInSuccessDto,
} from '../dto/auth/AuthSingInDtos';
import {CardDto} from '../dto/CardsDto';
import {
  ColumnDto,
  ColumnDtoCreate,
  ColumnDtoCreateResp,
} from '../dto/columns/ColumnsDto';

class Api {
  #urlBase: string;
  #token: string = '';

  constructor(baseUrl: string) {
    this.#urlBase = baseUrl;
  }

  async signIn(user: AuthSignInReqDto): Promise<AuthSignInSuccessDto> {
    return fetch(this.#urlBase + 'auth/sign-in', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((resp) => resp.json())
      .then((json: AuthSignInSuccessDto) => {
        this.#token = json.token;
        return json;
      });
  }

  async singUp(user: AuthSignUpReqDto): Promise<AuthSignUpSuccessDto> {
    return fetch(this.#urlBase + 'auth/sign-up', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(user),
    })
      .then((resp) => resp.json())
      .then((json: AuthSignUpSuccessDto) => {
        // TODO: This is not serious
        if (json.hasOwnProperty('code')) {
          throw new Error('Not ok req');
        }
        this.#token = json.token;
        return json;
      });
  }

  async getColumns(): Promise<ColumnDto[]> {
    return fetch(this.#urlBase + 'columns', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: ' bearer ' + this.#token,
      },
    })
      .then((resp) => resp.json())
      .then((json: ColumnDto[]) => json);
  }

  async addColumn(column: ColumnDtoCreate): Promise<ColumnDtoCreateResp> {
    return fetch(this.#urlBase + '', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: ' bearer ' + this.#token,
      },
      body: JSON.stringify(column),
    }).then((resp) => resp.json());
  }

  async selectColumn(id: number) {
    return fetch(this.#urlBase + 'columns/' + id, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: ' bearer ' + this.#token,
      },
    }).then((resp) => resp.json());
  }

  async updateColumn(id: number, column: ColumnDtoCreate) {
    return fetch(this.#urlBase + 'columns/' + id, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: ' bearer ' + this.#token,
      },
      body: JSON.stringify(column),
    }).then((resp) => resp.json());
  }

  async deleteColumn(id: number) {
    return fetch(this.#urlBase + 'columns/' + id, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        Authorization: ' bearer ' + this.#token,
      },
    }).then((resp) => resp.json());
  }

  async createCard(column: number, card: CardDto) {
    return fetch(this.#urlBase + 'columns/' + column + '/cards', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: ' bearer ' + this.#token,
      },
      body: JSON.stringify(card),
    }).then((resp) => resp.json());
  }
}

export const API: Api = new Api('https://trello-purrweb.herokuapp.com/');
