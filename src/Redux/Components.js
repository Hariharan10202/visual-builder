import { createSlice } from "@reduxjs/toolkit";

export const componentSlice = createSlice({
  name: "components",
  initialState: {
    data: [{ header: [], logo: [], paragraph: [], table: [] }],
  },
  reducers: {
    LogoFunc: (state, action) => {
      state.data[0].logo = [...action.payload];
    },
    HeaderFunc: (state, action) => {
      state.data[0].header = [...action.payload];
    },
    ParagraphFunc: (state, action) => {
      state.data[0].paragraph = [...action.payload];
    },
    TableFunc: (state, action) => {
      state.data[0].table = [...action.payload];
    },
  },
});

export const { LogoFunc, HeaderFunc, ParagraphFunc, TableFunc } =
  componentSlice.actions;

export default componentSlice.reducer;
