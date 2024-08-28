import React, { useEffect, useState } from "react";
import { Alert, Table } from "antd";
import { useSelector } from "react-redux";
import restaurantSelector from "../redux/selector";

const RestaurantTable = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [failedState, setFailedState] = useState(false);
  const { getRestaurantData, isFetchingRestaurant } = useSelector((state) => ({
    getRestaurantData: restaurantSelector.getRestaurant(state),
    isFetchingRestaurant: restaurantSelector.isFetchingRestaurant(state),
  }));
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
    },
  ];
  useEffect(() => {
    if (getRestaurantData !== undefined) {
      if (getRestaurantData !== "Failed") {
        setRestaurantData(getRestaurantData);
        setFailedState(false);
      } else {
        setFailedState(true);
      }
    }
  }, [getRestaurantData]);
  return (
    <div>
      {failedState && (
        <Alert message="Error Fetching data from API" type="error" />
      )}
      <Table
        loading={isFetchingRestaurant}
        columns={columns}
        dataSource={restaurantData}
      />
    </div>
  );
};
export default RestaurantTable;
