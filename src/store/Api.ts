import {
  AuthSignUpReqDto,
  AuthSignUpSuccessDto,
} from '../dto/auth/AuthSignUpDtos';
import {
  AuthSignInReqDto,
  AuthSignInSuccessDto,
} from '../dto/auth/AuthSingInDtos';
import {
  GetAllCardsDto,
  PostCardDto,
  PostCardDtoResp,
} from '../dto/cards/CardsDto';
import {
  ColumnDto,
  ColumnDtoCreate,
  ColumnDtoCreateResp,
} from '../dto/columns/ColumnsDto';

class Api {
  private urlBase: string;
  private token: string = '';

  constructor(baseUrl: string) {
    this.urlBase = baseUrl;
  }

  private containsError(json: any) {
    // TODO: Return to this later
    if (
      json.hasOwnProperty('code') ||
      json.hasOwnProperty('error') ||
      json.hasOwnProperty('message')
    ) {
      throw new Error('Not ok req');
    }
  }

  public async signIn(user: AuthSignInReqDto): Promise<AuthSignInSuccessDto> {
    return fetch(this.urlBase + 'auth/sign-in', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((resp) => resp.json())
      .then((json: AuthSignInSuccessDto) => {
        console.log(json.token);
        this.containsError(json);
        this.token = json.token;
        return json;
      });
  }

  public async signUp(user: AuthSignUpReqDto): Promise<AuthSignUpSuccessDto> {
    return fetch(this.urlBase + 'auth/sign-up', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(user),
    })
      .then((resp) => resp.json())
      .then((json: AuthSignUpSuccessDto) => {
        this.containsError(json);
        this.token = json.token;
        return json;
      });
  }

  public async getColumns(): Promise<ColumnDto[]> {
    return fetch(this.urlBase + 'columns', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: ' bearer ' + this.token,
      },
    })
      .then((resp) => resp.json())
      .then((json: ColumnDto[]) => {
        this.containsError(json);
        return json;
      });
  }

  public async addColumn(
    column: ColumnDtoCreate,
  ): Promise<ColumnDtoCreateResp> {
    return fetch(this.urlBase + 'columns', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: ' bearer ' + this.token,
      },
      body: JSON.stringify(column),
    })
      .then((resp) => resp.json())
      .then((json: ColumnDtoCreateResp) => {
        this.containsError(json);
        return json;
      });
  }

  public async selectColumn(id: number): Promise<ColumnDtoCreateResp> {
    return fetch(this.urlBase + 'columns/' + id, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: ' bearer ' + this.token,
      },
    })
      .then((resp) => resp.json())
      .then((json: ColumnDtoCreateResp) => {
        this.containsError(json);
        return json;
      });
  }

  public async updateColumn(
    id: number,
    column: ColumnDtoCreate,
  ): Promise<ColumnDtoCreateResp> {
    return fetch(this.urlBase + 'columns/' + id, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: ' bearer ' + this.token,
      },
      body: JSON.stringify(column),
    })
      .then((resp) => resp.json())
      .then((json: ColumnDtoCreateResp) => {
        this.containsError(json);
        return json;
      });
  }

  // Not required in task
  public async deleteColumn(id: number) {
    return fetch(this.urlBase + 'columns/' + id, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        Authorization: ' bearer ' + this.token,
      },
    })
      .then((resp) => resp.json())
      .then((json: any) => {
        this.containsError(json);
        return json;
      });
  }

  public async getCards(): Promise<GetAllCardsDto[]> {
    return fetch(this.urlBase + 'cards/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: ' bearer ' + this.token,
      },
    })
      .then((resp) => resp.json())
      .then((json: GetAllCardsDto[]) => {
        this.containsError(json);
        return json;
      });
  }

  public async createCard(card: PostCardDto): Promise<PostCardDtoResp> {
    return fetch(this.urlBase + 'columns/' + card.column + '/cards', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: ' bearer ' + this.token,
      },
      body: JSON.stringify({...card, column: {}}),
    })
      .then((resp) => resp.json())
      .then((json: PostCardDtoResp) => {
        this.containsError(json);
        return json;
      });
  }
}

export const API: Api = new Api('https://trello-purrweb.herokuapp.com/');
