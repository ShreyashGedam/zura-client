import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screen: "upload",
};

export const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    setScreen: (state, { payload }) => {
      state.screen = payload.screen;
    },
    defaultScreen: (state) => {
      state.screen = "upload";
    },
  },
});

export const { setScreen, defaultScreen } = drawerSlice.actions;

export default drawerSlice.reducer;
