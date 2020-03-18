import React from "react";
import { ScrollView, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icons from "react-native-vector-icons/MaterialIcons";

import {
  Container,
  CartComponent,
  CartList,
  Totals,
  TotalText,
  TotalValue,
  CheckountBuyText,
  CheckoutBuy,
  EmptyCart,
  EmptyCartText
} from "./styles";
import CartItem from "../../components/CartITem";

import { ApplicationState } from "../../stores";
import { ICartItem, ICartActionsTypes } from "../../stores/modules/cart/types";
import { formatPrice } from "../../utils/format";
import * as CartEvents from "../../stores/modules/cart/actions";

export default function Cart() {
  const dispatch = useDispatch();

  const cartList = useSelector<ApplicationState, ICartItem[]>(
    state => state.cart.products
  );

  const total = formatPrice(
    cartList.reduce((total, p) => {
      return total + p.product.price * p.amount;
    }, 0)
  );

  function removeFromCart(productId: number) {
    dispatch(CartEvents.removeFromCartRequest(productId));
  }

  function updateAmount(
    productId: number,
    request: ICartActionsTypes.ADD_AMOUNT | ICartActionsTypes.SUB_AMOUNT
  ) {
    dispatch(CartEvents.upDateAmountRequest(productId, request));
  }

  return (
    <Container>
      <ScrollView>
        <CartComponent>
          {cartList.length === 0 ? (
            <EmptyCart>
              <Icons name="remove-shopping-cart" size={100} color="#ccc" />
              <EmptyCartText>Seu Carrinhos Está Vazio</EmptyCartText>
            </EmptyCart>
          ) : (
            <>
              <CartList
                data={cartList}
                keyExtractor={p => String(p.product.id)}
                renderItem={({ item }) => (
                  <CartItem
                    cartItem={item}
                    key={String(item.product.id)}
                    addItem={() =>
                      updateAmount(
                        item.product.id,
                        ICartActionsTypes.ADD_AMOUNT
                      )
                    }
                    removeItem={() =>
                      updateAmount(
                        item.product.id,
                        ICartActionsTypes.SUB_AMOUNT
                      )
                    }
                    deleteFn={removeFromCart}
                  />
                )}
              />

              <Totals>
                <TotalText>TOTAL</TotalText>
                <TotalValue>{total}</TotalValue>
              </Totals>

              <CheckoutBuy>
                <CheckountBuyText>FINALIZAR PEDIDO</CheckountBuyText>
              </CheckoutBuy>
            </>
          )}
        </CartComponent>
      </ScrollView>
    </Container>
  );
}
