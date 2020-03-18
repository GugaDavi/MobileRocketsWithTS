import React from "react";
import { View, TouchableOpacity } from "react-native";
import Icons from "react-native-vector-icons/MaterialIcons";

import {
  AmountControls,
  Amounts,
  CartItem,
  ProductPrice,
  ProuctOptions,
  ProductName,
  ProductImg,
  ProductContent,
  SubTotal
} from "./styles";

import { ICartItem, ICartActionsTypes } from "../../stores/modules/cart/types";

interface ICartItemProps {
  cartItem: ICartItem;
  deleteFn(): void;
  removeItem(request: ICartActionsTypes.SUB_AMOUNT, productId: number): void;
  addItem(request: ICartActionsTypes.ADD_AMOUNT, productId: number): void;
}

// eslint-disable-next-line react/prop-types
const CartITem: React.FC<ICartItemProps> = ({
  cartItem,
  deleteFn,
  addItem,
  removeItem
}) => {
  return (
    <CartItem>
      <ProductContent>
        <ProductImg
          source={{
            uri: cartItem.product.image
          }}
        />
        <View style={{ flexDirection: "column", flex: 1 }}>
          <ProductName numberOfLines={2}>{cartItem.product.title}</ProductName>
          <ProductPrice>{cartItem.product.formatedPrice}</ProductPrice>
        </View>
        <TouchableOpacity onPress={deleteFn}>
          <Icons name="delete" size={24} color="#7159c1" />
        </TouchableOpacity>
      </ProductContent>
      <ProuctOptions>
        <AmountControls>
          <TouchableOpacity onPress={removeItem}>
            <Icons name="remove-circle-outline" color="#7159c1" size={24} />
          </TouchableOpacity>
          <Amounts>{cartItem.amount}</Amounts>
          <TouchableOpacity onPress={addItem}>
            <Icons name="add-circle-outline" color="#7159c1" size={24} />
          </TouchableOpacity>
        </AmountControls>
        <SubTotal>{cartItem.subTotal}</SubTotal>
      </ProuctOptions>
    </CartItem>
  );
};

export default CartITem;
