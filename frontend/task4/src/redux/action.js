import { GET_RESTAURANT, INSERT_RESTAURANT } from "./types";

const getRestaurantAction = () => {
  return {
    type: GET_RESTAURANT,
  };
};

const insertRestaurantAction = (restaurantDetails) => {
  return {
    type: INSERT_RESTAURANT,
    payload: restaurantDetails,
  };
};

export const action = {
  getRestaurantAction,
  insertRestaurantAction,
};
