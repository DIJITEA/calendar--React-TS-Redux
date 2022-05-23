import { configureStore } from "@reduxjs/toolkit";

import DateSliceLogic from "./actions/DateStorageLogic";
import AppStateLogic from "./actions/AppPseudoRender";
const store = configureStore({
  reducer: {
    DataR: DateSliceLogic,
    AppS: AppStateLogic,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
