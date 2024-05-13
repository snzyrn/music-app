// store.js
import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./features/playerSlice";
import { tmdbApi } from "./services/TMDB";

export const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});
