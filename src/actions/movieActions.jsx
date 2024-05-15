// Action Types
export const FETCH_MOVIES_REQUEST = "FETCH_MOVIES_REQUEST";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";

// Action Creators
export const fetchMoviesRequest = () => ({
  type: FETCH_MOVIES_REQUEST,
});

export const fetchMoviesSuccess = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchMoviesFailure = (error) => ({
  type: FETCH_MOVIES_FAILURE,
  payload: error,
});

// Async Action Creator
export const fetchMovies = () => {
  return (dispatch) => {
    dispatch(fetchMoviesRequest());
    fetch(
      `https://api.themoviedb.org/3/movie/725201/recommendations?api_key=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((data) => {
        const movies = data.results;
        dispatch(fetchMoviesSuccess(movies));
      })
      .catch((error) => {
        dispatch(fetchMoviesFailure(error.message));
      });
  };
};
