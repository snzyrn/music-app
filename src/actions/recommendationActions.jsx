// Action Types
export const FETCH_RECOMMENDATION_REQUEST = "FETCH_RECOMMENDATION_REQUEST";
export const FETCH_RECOMMENDATION_SUCCESS = "FETCH_RECOMMENDATION_SUCCESS";
export const FETCH_RECOMMENDATION_FAILURE = "FETCH_RECOMMENDATION_FAILURE";

// Action Creators
export const fetchRecommendationRequest = () => ({
  type: FETCH_RECOMMENDATION_REQUEST,
});

export const fetchRecommendationSuccess = (series) => ({
  type: FETCH_RECOMMENDATION_SUCCESS,
  payload: series,
});

export const fetchRecommendationFailure = (error) => ({
  type: FETCH_RECOMMENDATION_FAILURE,
  payload: error,
});

// Async Action Creator
export const fetchRecommendation = () => {
  return (dispatch) => {
    dispatch(fetchRecommendationRequest());
    fetch(
      `https://api.themoviedb.org/3/movie/72520/recommendations?api_key=${
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
        const recommendation = data.results;
        dispatch(fetchRecommendationSuccess(recommendation));
      })
      .catch((error) => {
        dispatch(fetchRecommendationFailure(error.message));
      });
  };
};
