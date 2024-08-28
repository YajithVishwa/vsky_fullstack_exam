import { combineReducers } from "redux";
import {
  GET_RESTAURANT,
  GET_RESTAURANT_FAILED,
  SET_RESTAURANT,
  INSERT_RESTAURANT,
  SET_INSERT_RESTAURANT,
  INSERT_RESTAURANT_FAILED,
} from "./types";

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
    case INSERT_RESTAURANT: {
      return {
        ...state,
        isInsertingRestaurant: false,
      };
    }
    case INSERT_RESTAURANT_FAILED: {
      return {
        ...state,
        insertRestaurantStatus: "Failed",
        isInsertingRestaurant: false,
      };
    }
    case SET_INSERT_RESTAURANT: {
      return {
        ...state,
        isInsertingRestaurant: false,
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
