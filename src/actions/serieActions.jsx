// Action Types
export const FETCH_SERIES_REQUEST = "FETCH_SERIES_REQUEST";
export const FETCH_SERIES_SUCCESS = "FETCH_SERIES_SUCCESS";
export const FETCH_SERIES_FAILURE = "FETCH_SERIES_FAILURE";

// Action Creators
export const fetchSERIESRequest = () => ({
  type: FETCH_SERIES_REQUEST,
});

export const fetchSERIESSuccess = (series) => ({
  type: FETCH_SERIES_SUCCESS,
  payload: series,
});

export const fetchSERIESFailure = (error) => ({
  type: FETCH_SERIES_FAILURE,
  payload: error,
});

// Async Action Creator
export const fetchSeries = () => {
  return (dispatch) => {
    dispatch(fetchSERIESRequest());
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }&language=en-US&page=1`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((data) => {
        const series = data.results;
        dispatch(fetchSERIESSuccess(series));
      })
      .catch((error) => {
        dispatch(fetchSERIESFailure(error.message));
      });
  };
};
