import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducers/movieReducer";
import serieReducer from "./reducers/serieReducer";
import recommendationReducer from "./reducers/recommendationReducer";

const store = configureStore({
  reducer: {
    movies: movieReducer,
    series: serieReducer,
    recommendation: recommendationReducer,
  },
});

export default store;
