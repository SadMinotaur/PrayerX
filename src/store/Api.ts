import AsyncStorage from '@react-native-community/async-storage';
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
import {
  CreateCommentDto,
  CreateCommentDtoResp,
} from '../dto/comments/CommentsDto';
import {Card} from './cards/cardsTypes';
import {Comment} from './comments/commentsTypes';

class Api {
  private urlBase: string;
  private token: string = '';

  constructor(baseUrl: string) {
    this.urlBase = baseUrl;
    AsyncStorage.getItem('token').then((v) => {
      if (v !== null) {
        console.log(v);
        this.token = v;
      }
    });
  }

  private containsError(json: any) {
    // TODO: Return to this later
    if (
      json.hasOwnProperty('code') ||
      json.hasOwnProperty('error') ||
      json.hasOwnProperty('message')
    ) {
      console.log(json);
      throw new Error('Not ok resp');
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
    })
      .then((resp) => resp.json())
      .then((json) => {
        this.containsError(json);
        return json;
      });
  }

  private getRequest(url: string): Promise<any> {
    return fetch(this.urlBase + url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: ' bearer ' + this.token,
      },
    })
      .then((resp) => resp.json())
      .then((json) => {
        this.containsError(json);
        return json;
      });
  }

  private deleteRequest(url: string): Promise<any> {
    return fetch(this.urlBase + url, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        Authorization: ' bearer ' + this.token,
      },
    })
      .then((resp) => resp.json())
      .then((json) => {
        this.containsError(json);
        return json;
      });
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
    })
      .then((resp) => resp.json())
      .then((json) => {
        this.containsError(json);
        return json;
      });
  }

  public async signIn(user: AuthSignInReqDto): Promise<AuthSignInSuccessDto> {
    return this.postRequest('auth/sign-in', user).then(
      (json: AuthSignInSuccessDto) => {
        this.token = json.token;
        AsyncStorage.setItem('token', this.token);
        return json;
      },
    );
  }

  public async signUp(user: AuthSignUpReqDto): Promise<AuthSignUpSuccessDto> {
    return this.postRequest('auth/sign-up', user).then(
      (json: AuthSignUpSuccessDto) => {
        this.token = json.token;
        AsyncStorage.setItem('token', this.token);
        return json;
      },
    );
  }

  public async getColumns(): Promise<ColumnDto[]> {
    return this.getRequest('columns');
  }

  public async addColumn(
    column: ColumnDtoCreate,
  ): Promise<ColumnDtoCreateResp> {
    return this.postRequest('columns', column);
  }

  public async selectColumn(id: number): Promise<ColumnDtoCreateResp> {
    return this.getRequest('columns/' + id);
  }

  public async updateColumn(
    id: number,
    column: ColumnDtoCreate,
  ): Promise<ColumnDtoCreateResp> {
    return this.updateRequest('columns/' + id, column);
  }

  // Not required in task
  public async deleteColumn(id: number) {
    return this.deleteRequest('columns/' + id);
  }

  public async getCards(): Promise<GetAllCardsDto[]> {
    return this.getRequest('cards/');
  }

  public async createCard(card: PostCardDto): Promise<PostCardDtoResp> {
    return this.postRequest('columns/' + card.column + '/cards', {
      ...card,
      column: {},
    });
  }

  public async deleteCard(cardId: number) {
    return this.deleteRequest('cards/' + cardId);
  }

  public async updateCard(card: Card): Promise<PostCardDtoResp> {
    return this.updateRequest('cards/' + card.id, {
      title: card.title,
      description: card.description,
      checked: card.checked,
      column: {},
    });
  }

  public async createComment(
    idCard: number,
    comment: CreateCommentDto,
  ): Promise<CreateCommentDtoResp> {
    return this.postRequest('cards/' + idCard + '/comments', comment);
  }

  public async getComments(): Promise<Comment[]> {
    return this.getRequest('comments/');
  }

  public async deleteComment(commentId: number) {
    return this.deleteRequest('comments/' + commentId);
  }

  public async updateComment(
    id: number,
    comment: CreateCommentDto,
  ): Promise<Comment> {
    return this.updateRequest('comments/' + id, {
      body: comment.body,
      created: comment.created,
    });
  }
}

export const API: Api = new Api('https://trello-purrweb.herokuapp.com/');
