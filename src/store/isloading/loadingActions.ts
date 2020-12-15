import {createAction} from '@reduxjs/toolkit';

export const setIsLoading = createAction<boolean>('SET_LOADING_STATE');
