import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { darken } from "polished";

export const Container = styled.View`
  background-color: #fff;
  width: 220px;
  height: 358px;
  border-radius: 4px;
  padding: 10px;
  margin-right: 15px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductName = styled.Text.attrs({
  numberOfLines: 2
})`
  font-size: 16px;
  line-height: 21px;
  margin-top: 10px;
`;

export const Price = styled.Text`
  font-size: 21px;
  line-height: 25px;
  font-weight: bold;
  margin-top: 5px;
`;

export const AddToCartButton = styled.TouchableOpacity`
  background-color: #7159c1;

  margin-top: auto;
  border-radius: 4px;
  height: 42px;

  flex-direction: row;
  align-items: center;
`;

export const CartIcon = styled.View`
  flex-direction: row;
  padding: 11px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  align-items: center;
  background-color: ${darken(0.03, "#7159c1")};
`;

export const Amount = styled.Text`
  margin-left: 3px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

export const ButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;
