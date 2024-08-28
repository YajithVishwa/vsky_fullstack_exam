import { action } from "./action";

const { getRestaurantAction, insertRestaurantAction } = action;

const dispatchGetRestaurant = (dispatch) => {
  dispatch(getRestaurantAction());
};

const dispatchInsertRestaurant = (dispatch) => (restaurantDetails) => {
  dispatch(insertRestaurantAction(restaurantDetails));
};

const operations = {
  dispatchGetRestaurant,
  dispatchInsertRestaurant,
};

export default operations;
