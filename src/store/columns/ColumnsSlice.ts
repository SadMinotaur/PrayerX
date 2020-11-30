import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const popupSlice = createSlice({
  name: 'columns',
  initialState: -1,
  reducers: {
    changePopup: (state, action: PayloadAction<number>) => action.payload,
  },
});
