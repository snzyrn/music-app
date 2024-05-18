import {
  FETCH_RECOMMENDATION_REQUEST,
  FETCH_RECOMMENDATION_SUCCESS,
  FETCH_RECOMMENDATION_FAILURE,
} from "../actions/recommendationActions";

const initialState = {
  recommendation: [],
  loading: false,
  error: "",
};

const recommendationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECOMMENDATION_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case FETCH_RECOMMENDATION_SUCCESS:
      return {
        ...state,
        loading: false,
        recommendation: action.payload,
        error: "",
      };
    case FETCH_RECOMMENDATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default recommendationReducer;
