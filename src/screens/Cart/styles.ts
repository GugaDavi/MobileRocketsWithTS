import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { FlatList } from "react-native";

import { ICartItem } from "../../stores/modules/cart/types";

export const Container = styled.View`
  background-color: #191920;
  flex: 1;

  padding: 20px;
`;

export const CartComponent = styled.View`
  background-color: #fff;
  border-radius: 4px;
  align-self: stretch;
  padding: 10px;
  flex: 1;
`;

class FlatProductList extends FlatList<ICartItem> {}

export const CartList = styled(FlatProductList)``;

export const Totals = styled.View`
  margin: 30px 0px;
  align-self: stretch;
  align-items: center;
`;

export const TotalText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #999;
`;

export const TotalValue = styled.Text`
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  color: #000;
`;

export const CheckountBuyText = styled.Text`
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
`;

export const CheckoutBuy = styled(RectButton)`
  background-color: #7159c1;
  padding: 13px;
  border-radius: 4px;
`;

export const EmptyCart = styled.View`
  flex: 1;
  align-self: stretch;
  align-items: center;
  padding: 50px 0px;
`;

export const EmptyCartText = styled.Text`
  font-size: 21px;
  font-weight: bold;
  line-height: 24px;
  margin-top: 20px;
`;
