import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import operations from "../redux/operations";
import RestaurantTable from "../component/RestaurantTable";

const RestaurantContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    operations.dispatchGetRestaurant(dispatch);
  }, [dispatch]);
  return (
    <div>
      <center>
        <h1>List of Restaurants</h1>
      </center>
      <RestaurantTable />
    </div>
  );
};
export default RestaurantContainer;
