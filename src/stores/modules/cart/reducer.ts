import produce from "immer";

import { ICartState, ICartActions, ICartActionsTypes } from "./types";
import { formatPrice } from "../../../utils/format";

const INITAL_STATE: ICartState = {
  products: []
};

const reducer = (state = INITAL_STATE, action: ICartActions) => {
  switch (action.type) {
    case ICartActionsTypes.ADD_CART_SUCCESS:
      return produce(state, draft => {
        draft.products.push(action.product);
      });

    case ICartActionsTypes.REMOVE_FROM_CART_REQUEST:
      return produce(state, draft => {
        const index = draft.products.findIndex(
          p => p.product.id === action.productId
        );

        draft.products.splice(index, 1);
      });

    case ICartActionsTypes.UPDATE_AMOUNT_SUCCESS:
      return produce(state, draft => {
        const product = draft.products[action.productIndex];
        if (action.request === ICartActionsTypes.ADD_AMOUNT) {
          product.amount += 1;
        } else {
          product.amount -= 1;
        }
        product.subTotal = formatPrice(product.product.price * product.amount);
        draft.products[action.productIndex] = product;
      });

    default:
      return state;
  }
};

export default reducer;
