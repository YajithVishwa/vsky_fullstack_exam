import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  GET_RESTAURANT,
  GET_RESTAURANT_FAILED,
  SET_RESTAURANT,
  INSERT_RESTAURANT,
  INSERT_RESTAURANT_FAILED,
  SET_INSERT_RESTAURANT,
} from "./types";
import axios from "axios";

function* getRestaurant() {
  try {
    const response = yield call(
      axios.get,
      "http://localhost:5000/api/restaurant"
    );
    yield put({ type: SET_RESTAURANT, payload: response.data });
  } catch (error) {
    yield put({ type: GET_RESTAURANT_FAILED, payload: error.message });
  }
}

function* insertRestaurant(action) {
  try {
    const response = yield call(
      axios.post,
      "http://localhost:5000/api/restaurant",
      action.payload
    );
    yield put({ type: SET_INSERT_RESTAURANT, payload: response.data });
  } catch (error) {
    yield put({ type: INSERT_RESTAURANT_FAILED, payload: error.message });
  }
}

function* watchInsertRestaurant() {
  yield takeLatest(INSERT_RESTAURANT, insertRestaurant);
}

function* watchGetRestaurant() {
  yield takeLatest(GET_RESTAURANT, getRestaurant);
}

export function* combinedSaga() {
  yield all([watchGetRestaurant(), watchInsertRestaurant()]);
}

export default function* rootSagas() {
  yield all([combinedSaga()]);
}
