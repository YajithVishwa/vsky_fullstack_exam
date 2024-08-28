import React, { useEffect, useState } from "react";
import { Alert, Table, Button, Form, Modal, Input, Rate } from "antd";
import { useSelector } from "react-redux";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import restaurantSelector from "../redux/selector";
import { useDispatch } from "react-redux";
import operations from "../redux/operations";
const { TextArea } = Input;

const RestaurantTable = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [failedState, setFailedState] = useState(false);
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const {
    getRestaurantData,
    isFetchingRestaurant,
    isInsertingRestaurant,
    insertRestaurantStatus,
  } = useSelector((state) => ({
    getRestaurantData: restaurantSelector.getRestaurant(state),
    isFetchingRestaurant: restaurantSelector.isFetchingRestaurant(state),
    isInsertingRestaurant: restaurantSelector.isInsertingRestaurant(state),
    insertRestaurantStatus: restaurantSelector.insertRestaurantStatus(state),
  }));
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Phone Number",
      dataIndex: "phone_number",
      key: "phone_number",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
    },
  ];
  const customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  };
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
  useEffect(() => {
    if (isInsertingRestaurant !== undefined) {
      if (!isInsertingRestaurant) {
        operations.dispatchGetRestaurant(dispatch);
      }
    }
  }, [dispatch, isInsertingRestaurant]);
  const onCreate = (values) => {
    operations.dispatchInsertRestaurant(dispatch)(values);
    setOpen(false);
  };
  return (
    <div>
      {failedState && (
        <Alert message="Error Fetching data from API" type="error" />
      )}
      {insertRestaurantStatus === "Failed" && (
        <Alert message="Error Inserting data from API" type="error" />
      )}
      <Modal
        open={open}
        title="Create new Restaurant Review"
        okText="Create"
        cancelText="Cancel"
        okButtonProps={{
          autoFocus: true,
          htmlType: "submit",
        }}
        onCancel={() => setOpen(false)}
        destroyOnClose
        modalRender={(dom) => (
          <Form
            layout="vertical"
            form={form}
            name="form_in_modal"
            initialValues={{
              modifier: "public",
            }}
            clearOnDestroy
            onFinish={(values) => onCreate(values)}
          >
            {dom}
          </Form>
        )}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input the Restaurant Name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name="phone_number"
          rules={[
            { required: true, message: "Please input the Phone Number!" },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: "Please input the Address!" }]}
        >
          <TextArea rows={3} />
        </Form.Item>
        <Form.Item
          label="Rating"
          name="rating"
          rules={[{ required: true, message: "Please select a rating!" }]}
        >
          <Rate
            allowHalf
            character={({ index = 0 }) => customIcons[index + 1]}
          />
        </Form.Item>
      </Modal>
      <div>
        <Table
          loading={isFetchingRestaurant && isInsertingRestaurant}
          columns={columns}
          dataSource={restaurantData}
        />
        <center>
          <Button type="primary" onClick={() => setOpen(true)}>
            Add Restaurant
          </Button>
        </center>
      </div>
    </div>
  );
};
export default RestaurantTable;
