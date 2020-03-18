import styled from "styled-components/native";

export const Container = styled.View``;

export const CartItem = styled.View`
  align-self: stretch;
`;

export const ProductContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImg = styled.Image`
  width: 100px;
  height: 100px;
  margin-right: 10px;
`;

export const ProductName = styled.Text`
  font-size: 18px;
  line-height: 21px;
  color: #333;
`;

export const ProductPrice = styled.Text`
  font-size: 21px;
  line-height: 24px;
  font-weight: bold;
  color: #000;
`;

export const ProuctOptions = styled.View`
  background-color: #eee;
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const AmountControls = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Amounts = styled.TextInput.attrs({
  editable: false
})`
  background-color: #fff;

  width: 51px;
  border-radius: 4px;
  border: 1px solid #999;
  text-align: center;
  padding: 5px 0px;
  margin: 0px 10px;
`;

export const SubTotal = styled.Text`
  font-weight: bold;
  font-size: 21px;
  line-height: 24px;
`;
