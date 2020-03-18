import styled from "styled-components/native";

import logo from "../../assets/images/logo.png";

export const Container = styled.View`
  background-color: #141419;
  align-items: center;
  height: 100px;
`;

export const Logo = styled.Image.attrs({
  source: logo
})`
  width: 185px;
  height: 24px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px 20px;
`;

export const Cart = styled.TouchableOpacity`
  position: relative;
`;

export const AmountCircleView = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  padding: 2px;
  position: absolute;
  top: -10px;
  right: -5px;
  background-color: #7159c1;
`;

export const AmountCart = styled.Text`
  color: #fff;
  text-align: center;
`;
