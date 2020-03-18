import { Alert } from "react-native";
import { all, put, call, select, takeLatest } from "redux-saga/effects";

import {
  ICartActionsTypes,
  UpdateAmountRequest,
  AddToCartRquest,
  ICartItem
} from "./types";
import { ApplicationState } from "../..";
import api from "../../../services/api";
import * as CartAction from "./actions";
import { formatPrice } from "../../../utils/format";

function* addToCart(action: AddToCartRquest) {
  const state: ICartItem[] = yield select<
    (state: ApplicationState) => ICartItem[]
  >(state => state.cart.products);

  const productIndex = state.findIndex(p => p.product.id === action.productId);

  console.tron.log(state, productIndex);

  if (productIndex >= 0) {
    const resp = yield call(api.get, `/stock/${action.productId}`);

    if (resp.data.amount === state[productIndex].amount) {
      Alert.alert("Quandidade solicitada fora do estoque");
      return;
    }
    yield put(
      CartAction.upDateAmountSuccess(ICartActionsTypes.ADD_AMOUNT, productIndex)
    );
  } else {
    const resp = yield call(api.get, `/products/${action.productId}`);
    yield put(
      CartAction.addToCartSuccess({
        product: { ...resp.data, formatedPrice: formatPrice(resp.data.price) },
        amount: 1,
        subTotal: formatPrice(resp.data.price)
      })
    );
    // history.push("/cart");
  }
}

function* updateAmount(action: UpdateAmountRequest) {
  console.tron.log(action);
  const state: ICartItem[] = yield select<
    (state: ApplicationState) => ICartItem[]
  >(state => state.cart.products);

  const productIndex = state.findIndex(p => p.product.id === action.productId);

  if (action.request === ICartActionsTypes.ADD_AMOUNT) {
    const resp = yield call(api.get, `/stock/${action.productId}`);

    if (resp.data.amount > state[productIndex].amount) {
      yield put(CartAction.upDateAmountSuccess(action.request, productIndex));
      return;
    }
    Alert.alert("Quandidade solicitada fora do estoque");
  } else {
    if (state[productIndex].amount > 1) {
      yield put(CartAction.upDateAmountSuccess(action.request, productIndex));
    }
  }
}

export default all([
  takeLatest(ICartActionsTypes.ADD_CART_REQUEST, addToCart),
  takeLatest(ICartActionsTypes.UPDATE_AMOUNT_REQUEST, updateAmount)
]);
