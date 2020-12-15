import {AuthSignUpReqDto} from './auth/AuthSignUpDtos';
import {AuthSignInReqDto} from './auth/AuthSingInDtos';
import {PostCardDtoBody} from './cards/CardsDto';
import {ColumnDtoCreate} from './columns/ColumnsDto';
import {CreateCommentDto} from './comments/CommentsDto';

export type PostRequestDto =
  | AuthSignInReqDto
  | AuthSignUpReqDto
  | ColumnDtoCreate
  | CreateCommentDto
  | PostCardDtoBody;

export type UpdateRequestDto =
  | ColumnDtoCreate
  | PostCardDtoBody
  | CreateCommentDto;
