import React from "react";
import { useSelector } from "react-redux";
import { SafeAreaView, TouchableOpacity } from "react-native";
import Icons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Logo,
  Content,
  Cart,
  AmountCart,
  AmountCircleView
} from "./styles";
import { ApplicationState } from "../../stores";
import { ICartItem } from "../../stores/modules/cart/types";

export default function Header() {
  const { navigate } = useNavigation();
  const carLength = useSelector<ApplicationState, number>(
    state => state.cart.products.length
  );

  return (
    <Container>
      <SafeAreaView style={{ flex: 1, alignSelf: "stretch" }}>
        <Content>
          <TouchableOpacity onPress={() => navigate("Home")}>
            <Logo />
          </TouchableOpacity>
          <Cart onPress={() => navigate("Cart")}>
            <Icons name="shopping-cart" size={24} color="#fff" />
            <AmountCircleView>
              <AmountCart>{carLength}</AmountCart>
            </AmountCircleView>
          </Cart>
        </Content>
      </SafeAreaView>
    </Container>
  );
}
