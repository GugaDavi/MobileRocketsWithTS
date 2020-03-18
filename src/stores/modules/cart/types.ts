import { IProduct } from "../../../types/dataTypes";

/**
 * Datatypes
 */

export interface ICartItem {
  product: IProduct;
  amount: number;
  subTotal?: string;
}

/**
 * State type
 */

export interface ICartState {
  readonly products: ICartItem[];
}

/**
 * Action Types
 */

export enum ICartActionsTypes {
  ADD_CART_REQUEST = "@cart/ADD_CART_REQUEST",
  ADD_CART_SUCCESS = "@cart/ADD_CART_SUCCESS",
  REMOVE_FROM_CART_REQUEST = "@cart/REMOVE_FROM_CART_REQUEST",
  UPDATE_AMOUNT_REQUEST = "@cart/UPDATE_AMOUNT_REQUEST",
  UPDATE_AMOUNT_SUCCESS = "@cart/UPDATE_AMOUNT_SUCCESS",
  ADD_AMOUNT = "@cart/ADD_AMOUNT",
  SUB_AMOUNT = "@cart/SUB_AMOUNT"
}

export interface AddToCartRquest {
  type: typeof ICartActionsTypes.ADD_CART_REQUEST;
  productId: number;
}

export interface AddToCartSuccess {
  type: typeof ICartActionsTypes.ADD_CART_SUCCESS;
  product: ICartItem;
}

export interface RemoveFromCartRequest {
  type: typeof ICartActionsTypes.REMOVE_FROM_CART_REQUEST;
  productId: number;
}

export interface UpdateAmountRequest {
  type: typeof ICartActionsTypes.UPDATE_AMOUNT_REQUEST;
  request: ICartActionsTypes.ADD_AMOUNT | ICartActionsTypes.SUB_AMOUNT;
  productId: number;
}

export interface UpdateAmountSuccess {
  type: typeof ICartActionsTypes.UPDATE_AMOUNT_SUCCESS;
  request: ICartActionsTypes.ADD_AMOUNT | ICartActionsTypes.SUB_AMOUNT;
  productIndex: number;
}

export type ICartActions =
  | AddToCartRquest
  | AddToCartSuccess
  | RemoveFromCartRequest
  | UpdateAmountRequest
  | UpdateAmountSuccess;
