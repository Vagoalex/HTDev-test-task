import { createSlice } from '@reduxjs/toolkit';

const pageState = {
  activePage: 'default',
};

const pageSlice = createSlice({
  name: 'page',
  initialState: pageState,
  reducers: {
    changeActivePage: (state, action) => {
      state.activePage = action.payload;
    },
  },
});

const { actions, reducer } = pageSlice;
export default reducer;

export const { changeActivePage } = actions;
