import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const apiKey = "59e45b1cfd52442653a71eda00decc39";

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${apiKey}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/discover/movie" }),
  }),
});

export const { UseGetTopChartsQuery } = tmdbApi;
