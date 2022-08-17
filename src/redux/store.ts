import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { businessApi } from "../services/api";
import contractReducer from "./contract/contractSlice";

export const store = configureStore({
  reducer: {
    [businessApi.reducerPath]: businessApi.reducer,
    contract: contractReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(businessApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
