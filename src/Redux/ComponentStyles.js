import { createSlice } from "@reduxjs/toolkit";

export const ComponentStyles = createSlice({
  name: "ComponentStyles",
  initialState: {
    data: {
      Header: {},
      Logo: {},
      Paragraph: {},
      Table: {},
    },
  },
  reducers: {
    LogoComp: (state, action) => {
      state.data.Logo = action.payload;
    },
    HeaderComp: (state, action) => {
      state.data.Header = action.payload;
    },
    ParagraphComp: (state, action) => {
      state.data.Paragraph = action.payload;
    },
    TableComp: (state, action) => {
      state.data.Table = action.payload;
    },
  },
});

export const { LogoComp, HeaderComp, ParagraphComp, TableComp } =
  ComponentStyles.actions;

export default ComponentStyles.reducer;
