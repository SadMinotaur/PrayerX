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

  private postRequest(url: string, body: any): Promise<any> {
    return fetch(this.urlBase + url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: ' bearer ' + this.token,
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  private getRequest(url: string): Promise<any> {
    return fetch(this.urlBase + url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: ' bearer ' + this.token,
      },
    }).then((resp) => resp.json());
  }

  private updateRequest(url: string, body: any): Promise<any> {
    return fetch(this.urlBase + url, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: ' bearer ' + this.token,
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  public async signIn(user: AuthSignInReqDto): Promise<AuthSignInSuccessDto> {
    return this.postRequest('auth/sign-in', user).then(
      (json: AuthSignInSuccessDto) => {
        this.containsError(json);
        this.token = json.token;
        return json;
      },
    );
  }

  public async signUp(user: AuthSignUpReqDto): Promise<AuthSignUpSuccessDto> {
    return this.postRequest('auth/sign-up', user).then(
      (json: AuthSignUpSuccessDto) => {
        this.containsError(json);
        this.token = json.token;
        return json;
      },
    );
  }

  public async getColumns(): Promise<ColumnDto[]> {
    return this.getRequest('columns').then((json: ColumnDto[]) => {
      this.containsError(json);
      return json;
    });
  }

  public async addColumn(
    column: ColumnDtoCreate,
  ): Promise<ColumnDtoCreateResp> {
    return this.postRequest('columns', column).then(
      (json: ColumnDtoCreateResp) => {
        this.containsError(json);
        return json;
      },
    );
  }

  public async selectColumn(id: number): Promise<ColumnDtoCreateResp> {
    return this.getRequest('columns/' + id).then(
      (json: ColumnDtoCreateResp) => {
        this.containsError(json);
        return json;
      },
    );
  }

  public async updateColumn(
    id: number,
    column: ColumnDtoCreate,
  ): Promise<ColumnDtoCreateResp> {
    return this.updateRequest('columns/' + id, column).then(
      (json: ColumnDtoCreateResp) => {
        this.containsError(json);
        return json;
      },
    );
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
    return this.getRequest('cards/').then((json: GetAllCardsDto[]) => {
      this.containsError(json);
      return json;
    });
  }

  public async createCard(card: PostCardDto): Promise<PostCardDtoResp> {
    console.log(card);
    return this.postRequest('columns/' + card.column + '/cards', {
      ...card,
      column: {},
    }).then((json: PostCardDtoResp) => {
      console.log(json);
      this.containsError(json);
      return json;
    });
  }
}

export const API: Api = new Api('https://trello-purrweb.herokuapp.com/');
