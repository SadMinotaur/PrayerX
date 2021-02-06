import {createReducer} from '@reduxjs/toolkit';
import {setIsLoading} from './loadingActions';

export const isLoadingReducer = createReducer(false, (builder) => {
  builder.addCase(setIsLoading, (state: boolean, action) => action.payload);
});
