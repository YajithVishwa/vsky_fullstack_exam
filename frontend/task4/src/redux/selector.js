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

export const selectIsInsertingRestaurant = createSelector(
  [selectRestaurant],
  (admin) => admin.isInsertingRestaurant
);

export const selectInsertRestaurantStatus = createSelector(
  [selectRestaurant],
  (admin) => admin.insertRestaurantStatus
);

const restaurantSelector = {
  getRestaurant: selectGetRestaurant,
  isFetchingRestaurant: selectIsFetchingRestaurant,
  isInsertingRestaurant: selectIsInsertingRestaurant,
  insertRestaurantStatus: selectInsertRestaurantStatus,
};

export default restaurantSelector;
