import {LoginUserSuccessPd} from '../../store/user/userActions';
import {GetAllCardsDto} from '../cards/CardsDto';

export type CreateCommentDto = {
  body: string;
  created: string;
};

export type CreateCommentDtoResp = {
  id: number;
  cardId: number;
  userId: number;
  body: string;
  created: string;
  card: GetAllCardsDto;
  user: LoginUserSuccessPd;
};
