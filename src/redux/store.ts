import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { businessApi } from "../services/api";

export const store = configureStore({
  reducer: {
    [businessApi.reducerPath]: businessApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(businessApi.middleware),
});

setupListeners(store.dispatch);
