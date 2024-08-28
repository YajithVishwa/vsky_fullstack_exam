import { action } from "./action";

const { getRestaurantAction } = action;

const dispatchGetRestaurant = (dispatch) => {
  dispatch(getRestaurantAction());
};

const operations = {
  dispatchGetRestaurant,
};

export default operations;
