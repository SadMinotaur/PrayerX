import {createReducer} from '@reduxjs/toolkit';
import {addCommentSuccess, getCommentsSuccess} from './commentsAction';

import {Comment} from './commentsTypes';

export const commentsReducer = createReducer([] as Comment[], (builder) => {
  builder
    .addCase(getCommentsSuccess, (state: Comment[], action) => action.payload)
    .addCase(addCommentSuccess, (state: Comment[], action) => [
      ...state,
      action.payload,
    ]);
});
