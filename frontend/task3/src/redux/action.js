import { GET_RESTAURANT } from "./types";

const getRestaurantAction = () => {
  return {
    type: GET_RESTAURANT,
  };
};

export const action = {
  getRestaurantAction,
};
