import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  value: string;
}

const initialState: AppState = {
  value: "year",
};

export const AppStateLogic = createSlice({
  name: "AppStateLogic",
  initialState,
  reducers: {
    appStateUpdate: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { appStateUpdate } = AppStateLogic.actions;

export default AppStateLogic.reducer;
