import React from "react";
import Icons from "react-native-vector-icons/MaterialIcons";

import { IProduct } from "../../types/dataTypes";

import {
  Container,
  ProductImage,
  ProductName,
  Price,
  AddToCartButton,
  CartIcon,
  Amount,
  ButtonText
} from "./styles";

interface IProductItemProps {
  product: IProduct;
  addToCart(): void;
  amountTotal: string;
}

// eslint-disable-next-line react/prop-types
const ProductItem: React.FC<IProductItemProps> = ({
  product,
  addToCart,
  amountTotal
}) => {
  return (
    <Container>
      <ProductImage
        source={{
          uri: product.image
        }}
      />
      <ProductName>{product.title}</ProductName>
      <Price>{product.formatedPrice}</Price>

      <AddToCartButton onPress={addToCart}>
        <CartIcon>
          <Icons name="add-shopping-cart" size={20} color="#fff" />
          <Amount>{amountTotal}</Amount>
        </CartIcon>
        <ButtonText>ADICIONAR</ButtonText>
      </AddToCartButton>
    </Container>
  );
};

export default ProductItem;
