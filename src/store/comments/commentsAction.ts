import {createAction} from '@reduxjs/toolkit';
import {Comment} from './commentsTypes';

export const getCommentsRequest = createAction('GET_COMMENTS_REQUEST');
export const getCommentsSuccess = createAction<Comment[]>(
  'GET_COMMENTS_SUCCESS',
);
export const getCommentsFailure = createAction<string>('GET_COMMENTS_FAILURE');

export interface AddCommentActionRequestPd {
  idCard: number;
  body: string;
}
export const addCommentRequest = createAction<AddCommentActionRequestPd>(
  'ADD_COMMENT_REQUEST',
);
export const addCommentSuccess = createAction<Comment>('ADD_COMMENT_SUCCESS');
export const addCommentFailure = createAction<string>('ADD_COMMENT_FAILURE');

export interface UpdateCommentRequestPd {
  id: number;
  body: string;
  created: string;
}
export const updateCommentRequest = createAction<UpdateCommentRequestPd>(
  'UPDATE_COMMENT_REQUEST',
);
export const updateCommentSuccess = createAction<Comment>(
  'UPDATE_COMMENT_SUCCESS',
);
export const updateCommentFailure = createAction<string>(
  'UPDATE_COMMENT_FAILURE',
);

export const deleteCommentRequest = createAction<number>(
  'DELETE_COMMENT_REQUEST',
);
export const deleteCommentSuccess = createAction<number>(
  'DELETE_COMMENT_SUCCESS',
);
export const deleteCommentFailure = createAction<string>(
  'DELETE_COMMENT_FAILURE',
);
