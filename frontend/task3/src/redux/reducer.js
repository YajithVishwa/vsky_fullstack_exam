import { combineReducers } from "redux";
import { GET_RESTAURANT, GET_RESTAURANT_FAILED, SET_RESTAURANT } from "./types";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_RESTAURANT: {
      return {
        ...state,
        isFetchingRestaurant: true,
      };
    }
    case SET_RESTAURANT: {
      return {
        ...state,
        restaurant: action.payload,
        isFetchingRestaurant: false,
      };
    }
    case GET_RESTAURANT_FAILED: {
      return {
        ...state,
        restaurant: "Failed",
        isFetchingRestaurant: false,
      };
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  restaurant: reducer,
});

export default rootReducer;
