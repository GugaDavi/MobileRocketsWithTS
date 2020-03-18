import { createStore, Store, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { ICartState } from "./modules/cart/types";

import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export interface ApplicationState {
  cart: ICartState;
}

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
