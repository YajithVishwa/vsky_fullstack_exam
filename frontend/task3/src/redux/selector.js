import { createSelector } from "reselect";

const selectRestaurant = (state) => state.restaurant;

export const selectGetRestaurant = createSelector(
  [selectRestaurant],
  (admin) => admin.restaurant
);

export const selectIsFetchingRestaurant = createSelector(
  [selectRestaurant],
  (admin) => admin.isFetchingRestaurant
);

const restaurantSelector = {
  getRestaurant: selectGetRestaurant,
  isFetchingRestaurant: selectIsFetchingRestaurant,
};

export default restaurantSelector;
