import {createAction} from '@reduxjs/toolkit';
import {Comment} from './commentsTypes';

export const getCommentsRequest = createAction('GET_COMMENTS_REQUEST');
export const getCommentsSuccess = createAction<Comment[]>(
  'GET_COMMENTS_SUCCESS',
);
export const getCommentsFailure = createAction<string>('GET_COMMENTS_FAILURE');

export interface AddCommentActionRequestPd {
  idCard: number;
  name: string;
}
export const addCommentRequest = createAction<AddCommentActionRequestPd>(
  'ADD_COMMENT_REQUEST',
);
export const addCommentSuccess = createAction<Comment>('ADD_COMMENT_SUCCESS');
export const addCommentFailure = createAction<string>('ADD_COMMENT_FAILURE');

// export const updateColumnRequest = createAction<Column>(
//   'UPDATE_COLUMN_REQUEST',
// );

// export const updateColumnSuccess = createAction<Column>(
//   'UPDATE_COLUMN_SUCCESS',
// );
// export const updateColumnFailure = createAction<string>(
//   'UPDATE_COLUMN_FAILURE',
// );
