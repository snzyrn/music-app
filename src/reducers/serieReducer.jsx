import {
  FETCH_SERIES_REQUEST,
  FETCH_SERIES_SUCCESS,
  FETCH_SERIES_FAILURE,
} from "../actions/serieActions";

const initialState = {
  series: [],
  loading: false,
  error: "",
};

const serieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case FETCH_SERIES_SUCCESS:
      return {
        ...state,
        loading: false,
        series: action.payload,
        error: "",
      };
    case FETCH_SERIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default serieReducer;
