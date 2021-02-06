import {createReducer} from '@reduxjs/toolkit';
import {
  addCommentSuccess,
  getCommentsSuccess,
  deleteCommentSuccess,
  updateCommentSuccess,
} from './commentsAction';

import {Comment} from './commentsTypes';

export const commentsReducer = createReducer([] as Comment[], (builder) => {
  builder
    .addCase(getCommentsSuccess, (state: Comment[], action) => action.payload)
    .addCase(addCommentSuccess, (state: Comment[], action) => [
      ...state,
      action.payload,
    ])
    .addCase(updateCommentSuccess, (state: Comment[], action) =>
      state.map((v: Comment) =>
        v.id === action.payload.id ? action.payload : v,
      ),
    )
    .addCase(deleteCommentSuccess, (state: Comment[], action) =>
      state.filter((v: Comment) => v.id !== action.payload),
    );
});
